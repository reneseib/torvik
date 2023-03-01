import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const DropDrown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [state, stateSetter] = props.stateControl;



    const handleStateSetting = (e) => {
        let value = e.target.dataset.value;
        console.log("value", value)
        let translator = {
            "gastro": "Gastronomie",
            "office": "Büro"
        }
        stateSetter({
            id: value,
            text: translator[value],
        });
        console.log(state)
        setIsOpen(false);
    }

    useEffect(() => {
    }, [isOpen, state])

    return (
        <div className={`${styles.dropDown}`}>

            <div style={{ width: "fit-content", minWidth: "250px", position: "relative" }}>
                <button className={`${styles.button} ${styles.buttonIsXs}`} onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen) }}>
                    <div className={styles.dropDownText}>
                        {
                            state === "" ? (
                                <>
                                    Nutzungsart der Mietfläche <span className={styles.caret}></span>
                                </>
                            ) : (


                                <div className={styles.itemShow}>
                                    <div>
                                        <a tabindex="-1" role="button">
                                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path><title>Checkmark</title></svg>
                                            {state.text}
                                        </a>
                                    </div>
                                    <div className={styles.caret}></div>
                                </div>


                            )
                        }
                    </div>
                </button>

                <ul className={`${styles.dropDownMenu} ${isOpen ? (styles.isOpen) : (null)}`} role="menu">
                    <li className="active" data-value="gastro" onClick={(e) => handleStateSetting(e)} >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button">
                                {
                                    state.id === "gastro" ? (
                                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path><title>Checkmark</title></svg>
                                    ) : (null)
                                }
                                Gastronomie
                            </a>
                        </div>
                    </li>

                    <li className={styles.dropDownHeader}>Bald verfügbar:</li>
                    <li className="disabled" data-value="textil" >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button"> Textil</a>
                        </div>
                    </li>
                    <li className="disabled" data-value="hartwaren" >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button"> Hartwaren</a>
                        </div>
                    </li>
                    <li className="disabled" data-value="dienstleistung" >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button"> Dienstleistung</a>
                        </div>
                    </li >

                </ul >
            </div >
        </div >
    );
};

export default DropDrown;