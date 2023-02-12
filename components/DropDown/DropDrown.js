import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const DropDrown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [state, stateSetter] = props.stateControl;

    useEffect(() => {
        console.log("is open", isOpen);
    }, [isOpen])

    const handleStateSetting = (e) => {
        let value = e.target.dataset.value;
        let translator = {
            "gastro": "Gastronomie",
            "office": "Büro"
        }
        stateSetter({
            id: value,
            text: translator[value],
        });
        setIsOpen(false);
    }

    return (
        <div className={`${styles.dropDown}`}>

            <div style={{ width: "fit-content", minWidth: "250px", position: "relative" }}>
                <button className={`${styles.button} ${styles.buttonIsXs}`} onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen) }}>
                    <div className={styles.dropDownText}>
                        Nutzungsart der Mietfläche <span className={styles.caret}></span>
                    </div>
                </button>

                <ul className={`${styles.dropDownMenu} ${isOpen ? (styles.isOpen) : (null)}`} role="menu">
                    <li className="active" data-value="gastro" onClick={(e) => handleStateSetting(e)} >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button" className="chart-toggle" chart-toggle="fixed-connections-chart">
                                {
                                    state === "gastro" ? (
                                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path><title>Checkmark</title></svg>
                                    ) : (null)
                                }
                                Gastronomie
                            </a>
                        </div>
                    </li>

                    <li className={styles.dropDownHeader}>Bald verfügbar:</li>
                    <li className="active" data-value="office" onClick={(e) => handleStateSetting(e)} >
                        <div className={styles.itemContainer}>
                            <a tabindex="-1" role="button" className="chart-toggle" chart-toggle="fixed-connections-chart">
                                {
                                    state === "office" ? (
                                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path><title>Checkmark</title></svg>
                                    ) : (null)
                                }
                                Office
                            </a>
                        </div>
                    </li>
                    <li className="active">
                        <div className={styles.itemContainer}>

                            <a tabindex="-1" role="button" className="chart-toggle" chart-toggle="fixed-connections-chart"><i className="mms-icon-check"></i> Gastronomie</a>
                        </div>
                    </li>
                    <li className="active">
                        <div className={styles.itemContainer}>

                            <a tabindex="-1" role="button" className="chart-toggle" chart-toggle="fixed-connections-chart"><i className="mms-icon-check"></i> Gastronomie</a>
                        </div>
                    </li>
                    <li className="active">
                        <div className={styles.itemContainer}>

                            <a tabindex="-1" role="button" className="chart-toggle" chart-toggle="fixed-connections-chart"><i className="mms-icon-check"></i> Gastronomie</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DropDrown;