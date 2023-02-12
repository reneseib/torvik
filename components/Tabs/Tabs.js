import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const Tabs = () => {


    const [isActive, setIsActive] = useState("gastro");

    useEffect(() => {

    }, [isActive]);

    const handleClick = (e) => {
        e.preventDefault();

        let value = e.target.ariaId;
        setIsActive(value);
    }


    const tabsData = [
        {
            id: 'gastro',
            text: "Gastronomie",
            disabled: false,
        },
        {
            id: 'office',
            text: "Büro",
            disabled: true,
        },
        {
            id: 'retail',
            text: "Retail",
            disabled: true,
        },
        {
            id: 'warehouse',
            text: "Lager & Logistik",
            disabled: true,
        },
        {
            id: 'showroom',
            text: "Showroom",
            disabled: true,
        },
    ]

    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabsHeader}>
                {
                    tabsData.map((tab, i) => (
                        <div
                            key={tab.id + i}
                            onClick={
                                tab.disabled ? (
                                    () => false
                                ) : (
                                    () => setIsActive(tab.id)
                                )
                            }
                            aria-id={tab.id}
                            className={`${styles.headerItem} ${tab.disabled ? (styles.isDisabled) : ("")} ${isActive === tab.id ? (styles.isActive) : ("")}`}>
                            <h3 title={tab.text}>{tab.text}</h3>
                        </div>
                    ))
                }
            </div>

        </div >
    );
};

export default Tabs;