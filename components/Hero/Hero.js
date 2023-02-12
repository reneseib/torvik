import React from 'react';

import Button from '../Button';

import styles from './styles.module.scss';

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>

            <div className={styles.heroContainer}>
                <h4 className={styles.heroCaption}>Torvik Gruen</h4>
                <h2 className={styles.heroTitle}>CO<sub>2</sub> Kalkulator</h2>
                <h4 className={styles.heroSubtitle}>Senken Sie den CO2 Fußabdruck Ihrer Immobilien - Quadratmeter für Quadratmeter</h4>
                <Button type="primary">
                    Jetzt testen
                </Button>
            </div>
            <div className={styles.heroImage}>
                <img src="/assets/img/hero.svg" height="600" width="600" />
            </div>


        </div>
    );
};

export default Hero;