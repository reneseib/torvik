import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import DropDown from '../components/DropDown';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import CheckBox from '../components/CheckBox';

export default function Home() {


  const formCfg = {
    position: {
      text: "Was ist Ihre Jobbezeichnung? *",
      id: "position",
      type: "input",
      validate: ["not-empty"]
    },
    mietflaeche: {
      text: "Wieviel qm hat die Mietfläche Ihres Mieters? *",
      id: "mietflaeche",
      type: "input",
      limit: "digits",
      validate: ["is-digit", "not-empty", "gt-zero"]
    },
    tafel_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "die Tafel"?',
      id: "tafel_yesno",
      type: "switch",
    },
    tgtg_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "too good to go"?',
      id: "tgtg_yesno",
      type: "switch",
    },
    zgfdt_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "Zu gut für die Tonne"?',
      id: "zgfdt_yesno",
      type: "switch",
    },
    regu_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "Restlos glücklich"?',
      id: "regu_yesno",
      type: "switch",
    },
    wmnw_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "Wirf mich nicht weg"?',
      id: "wmnw_yesno",
      type: "switch",
    },
    zuto_yesno: {
      text: 'Wird Ihr Mieter Mitglied bei "Zur Tonne"?',
      id: "zuto_yesno",
      type: "switch",
    },
    opnv_yesno: {
      text: 'Wird Ihr Mieter Kunden mit tagesaktuellen ÖPNV-Ticket einen Rabatt von 5% gewähren?',
      id: "opnv_yesno",
      type: "switch",
    },
    nahe_yesno: {
      text: 'Wird Ihr Mieter seine Waren möglichst regional beziehen?',
      id: "nahe_yesno",
      type: "switch",
    },
    port_yesno: {
      text: 'Wird Ihr Mieter angemessen große Portionen anbieten um Lebensmittelabfälle zu vermeiden?',
      id: "port_yesno",
      type: "switch",
    },
    gesch_yesno: {
      text: 'Wird Ihr Mieter Mehrweggeschirr anbieten und/oder Plastikverpackungen meiden?',
      id: "gesch_yesno",
      type: "switch",
    },
    pfand_yesno: {
      text: 'Wird Ihr Mieter an Pfandsystemen wie z.B. Recup, Relevo oder Vytal teilnehmen?',
      id: "pfand_yesno",
      type: "switch",
    },
    emob_yesno: {
      text: 'Bietet Ihr Mieter Lieferdienste an und wird diese mit verbrennungsfreier Mobilität (z.B. Fahrrad, e-Scooter, elektrisches Auto, usw.) durchführen?',
      id: "emob_yesno",
      type: "switch",
    },
    lebensmittel: {
      text: 'Wieviel kg Lebensmittelabfälle wird Ihr Mieter im Monat insgesamt vermeiden? *',
      id: "lebensmittel",
      type: "switch-input",
      limit: "digits",
      validate: ["is-digit", "not-empty", "gt-zero"]
    },
    stromverbrauch: {
      text: 'Wieviel Strom in kWh verbraucht Ihr Mieter bisher im Monat im Mittel? *',
      id: "stromverbrauch",
      type: "input",
      limit: "digits",
    },
    wenigerstrom: {
      text: 'Wieviel davon in % plant Ihr Mieter einzusparen?',
      id: "wenigerstrom",
      type: "input",
      limit: "digits",
    },
    erneuerbar: {
      text: 'Wieviel % vom verbleibenden Strom wird ihr Mieter durch erneuerbare Energien beziehen?',
      id: "erneuerbar",
      type: "input",
      limit: "digits",
    },
  }

  const [errors, setErrors] = useState({})
  const [selectValue, setSelectValue] = useState("")
  const [formValues, setFormValues] = useState(
    {
      position: "",
      mietflaeche: "",
      tafel_yesno: false,
      tgtg_yesno: false,
      zgfdt_yesno: false,
      regu_yesno: false,
      wmnw_yesno: false,
      zuto_yesno: false,
      opnv_yesno: false,
      nahe_yesno: false,
      port_yesno: false,
      gesch_yesno: false,
      pfand_yesno: false,
      emob_yesno: false,
      lebensmittel: "",
      stromverbrauch: "",
      wenigerstrom: "",
      erneuerbar: "",
    }
  );

  const [result, setResult] = useState(null)


  const handleFormChange = (e) => {
    let name = e.target.name;

    var value = e
    if (typeof value === 'object') {
      value = value?.target?.value;
    }
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = async () => {
    // ADD IP, ID, TIME HERE TO DATA

    // ADD CONVERSION YES/NO HERE

    let resp = await fetch("api/v1/form", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formValues })
    })
    return resp
  }

  const checkIsDigit = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseInt(str))
  }

  const checkIsText = (str) => {
    if (typeof str != "string") return false
    return isNaN(str) && isNaN(parseInt(str))
  }

  const checkIsEmpty = (str) => {
    if (str === "") return true
    return false
  }

  const validateForm = () => {
    let inputErrors = []

    let newErrors = {};

    Object.keys(formValues).forEach(key => {
      switch (key) {
        case "position":
          if (!checkIsText(formValues[key]) && checkIsDigit(formValues[key]) || checkIsEmpty(formValues[key])) {
            newErrors[key] = "Bitte Eingabe überprüfen."
            inputErrors.push(key)
          }
          break;

        case "mietflaeche":
          if (checkIsText(formValues[key]) && !checkIsDigit(formValues[key]) || checkIsEmpty(formValues[key])) {
            newErrors[key] = "Bitte Eingabe überprüfen."
            inputErrors.push(key)
          }
          break;

        case "lebensmittel":
          if (checkIsText(formValues[key]) && !checkIsDigit(formValues[key]) || checkIsEmpty(formValues[key])) {
            newErrors[key] = "Bitte Eingabe überprüfen."
            inputErrors.push(key)
          }
          break;

        case "stromverbrauch":
          if (checkIsText(formValues[key]) && !checkIsDigit(formValues[key]) || checkIsEmpty(formValues[key])) {
            newErrors[key] = "Bitte Eingabe überprüfen."
            inputErrors.push(key)
          }
          break;

        case "wenigerstrom":
          if (!checkIsEmpty(formValues[key])) {
            if (!checkIsDigit(formValues[key])) {
              newErrors[key] = "Bitte Eingabe überprüfen."
              inputErrors.push(key)
            } else {
              if (parseInt(formValues[key]) < 0 || parseInt(formValues[key]) > 100) {
                newErrors[key] = "Bitte eine Zahl zwischen 0 und 100 eingeben."
                inputErrors.push(key)
              }
            }
          }
          break;

        case "erneuerbar":
          if (!checkIsEmpty(formValues[key])) {
            if (!checkIsDigit(formValues[key])) {
              newErrors[key] = "Bitte Eingabe überprüfen."
              inputErrors.push(key)
            } else {
              if (parseInt(formValues[key]) < 0 || parseInt(formValues[key]) > 100) {
                newErrors[key] = "Bitte eine Zahl zwischen 0 und 100 eingeben."
                inputErrors.push(key)
              }
            }
          }
          break;
      }
    })


    if (inputErrors.length > 0) {
      setErrors({ ...newErrors })
      return inputErrors
    } else {
      setErrors({})
    }

    return []
  }

  const resetForm = () => {
    location.reload();
  }

  const measurements = {
    tafel_yesno: 'Mitgliedschaft - "Die Tafel"',
    tgtg_yesno: 'Mitgliedschaft - "too good to go"',
    zgfdt_yesno: 'Mitgliedschaft - "Zu gut für die Tonne"',
    regu_yesno: 'Mitgliedschaft - "Restlos glücklich"',
    wmnw_yesno: 'Mitgliedschaft - "Wirf mich nicht weg"',
    zuto_yesno: 'Mitgliedschaft - "Zur Tonne"',
    opnv_yesno: 'Rabatt mit ÖPNV-Ticket',
    nahe_yesno: 'Regionaler Warenbezug',
    port_yesno: 'Angebot angemessener Portionen',
    gesch_yesno: 'Mehrweggeschirr & keine Plastikverpackungen',
    pfand_yesno: 'Mitgliedschaft bei Pfandsystemen',
    emob_yesno: 'Verbrennungsfreie Mobilität bei Lieferdienst',
    lebensmittel: 'Einsparung bei Lebensmittelabfällen [kg]: ',
    wenigerstrom: 'Einsparung des Stromverbrauchs [%]: ',
    erneuerbar: 'Anteil Ökostrom [%]: ',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let inputErrors = validateForm();

    if (inputErrors.length === 0) {
      let resp = await submitForm();

      let json = await resp.json();
      setLoading(true);
      if (resp.status === 200) {
        setLoading(false);
        setResult(json.result);
      }
    } else {
      let scrollId = inputErrors[0];
      let elem = document.getElementById(scrollId + "-label");
      elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
  }



  useEffect(() => {

  }, [formValues, selectValue, result]);

  useEffect(() => {
  }, [errors]);

  useEffect(() => {
    if (result != null) {
      document.getElementById("result").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
  }, [result]);



  return (
    <>
      <Head>
        <title>Torvik Gruen - CO2 Rechner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className={styles.main} id="main">
        <div className={styles.container}>
          <form className={styles.form}>
            <DropDown stateControl={[selectValue, setSelectValue]} />

            <div className={styles.formContent}>
              <div className={styles.checkBoxWrapper}>
                <div className={styles.checkBoxContainer}>
                  <div className={styles.extendableContainer}>
                    {
                      Object.keys(formCfg).map((key, i) => {
                        if (formCfg[key].type === 'switch') {
                          return (
                            <div style={{ marginTop: "2em", display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                              <CheckBox
                                name={key}
                                value={formValues}
                                state={formValues}
                                stateSetter={handleFormChange}
                              />
                              <div style={{ padding: "0 0 0 1em" }}>
                                <h4>{formCfg[key].text}</h4>
                                <p>{formCfg[key].description}</p>
                              </div>
                            </div>
                          )
                        } else {
                          return (
                            <>
                              <label id={key + "-label"} htmlFor={key} style={{ margin: "2em 0 0.5em", fontWeight: "bold" }}>{formCfg[key].text}</label>
                              <input
                                id={key}
                                type={"text"}
                                name={key}
                                placeholder={""}
                                style={{
                                  marginRight: "1em",
                                }}
                                value={formValues[key]}
                                data-validate={formValues[key].validate}
                                // ADD ERROR CHECK
                                onChange={(e) => handleFormChange(e)}
                              />
                              <span id={key + "-error"} style={{ color: "#fd1948", fontWeight: "bold" }}>
                                {errors[key] !== undefined ? (errors[key]) : ("")}
                              </span>
                            </>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.submit}
              id="submit-btn" onClick={(e) => { e.preventDefault; handleSubmit(e) }}>
              Berechnen
            </div>

          </form>
          {
            loading === true ? (
              <div>
                Loading...
              </div>
            ) : ("")
          }
          {
            result !== null ? (
              <div style={{ width: "100%" }}>
                <div className={styles.resultContainer} id="result">
                  <div style={{ display: "flex", flexDirection: "row", widht: "100%" }}>
                    <div style={{ width: "100%" }}>
                      <h3 style={{ margin: "0em 0 1em" }}>Maßnahmen:</h3>
                      <table style={{ listStyle: "none", marginBottom: "2em" }}>
                        {
                          Object.keys(measurements).map((key) => {
                            if (formValues[key] !== false && formValues[key] !== "") {
                              return (
                                <tr>
                                  <td style={{ paddingBottom: "0.75em" }}>
                                    ▸&nbsp;&nbsp;
                                  </td>
                                  <td style={{ paddingBottom: "0.75em" }}>
                                    {measurements[key]}
                                  </td>
                                  {
                                    key.includes("yesno") ? ("") : (
                                      <><td style={{ paddingBottom: "0.75em", paddingLeft: "0.5em", textAlign: "right" }}>{formValues[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td></>
                                    )
                                  }

                                </tr>
                              )
                            }
                          })

                        }
                      </table>
                    </div>
                    <div style={{ width: "100%" }}>
                      <h3 style={{ margin: "0em 0 1em" }}>Ergebnis:</h3>
                      CO2-Einsparung gesammt:<br /> <h2>{result.savings.toLocaleString(navigator.language, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}  Tonnen pro Jahr</h2>
                      <br /><br />
                      CO2-Einsparung gesammt bezogen auf Mietfläche:<br /> <h2>{result.savings_sqm.toLocaleString(navigator.language, { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Tonnen pro m2 pro Jahr</h2>
                    </div>
                  </div>
                  <div
                    className={styles.submit}
                    id="submit-btn" onClick={(e) => { resetForm() }}>
                    Neustart
                  </div>
                </div>

              </div>
            ) : (null)
          }

        </div>

      </main >
    </>
  )
}
