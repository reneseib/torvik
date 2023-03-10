import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const mission = () => {
    return (
        <>
            <Head>
                <title>Torvik Gruen - CO<sub>2</sub> Rechner</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Hero /> */}
            <main className={styles.main} id="main">
                <div className={styles.containerWrapper}>
                    <div className={styles.container}>
                        <h1 style={{ fontFamily: "MDB", fontSize: "5vh" }}>Mission</h1>
                        <div className={styles.missionText} style={{ width: "100%" }}>
                            <p>Green Lease Mietvertragsklauseln sind Klauseln, die auf Nachhaltigkeit und Umweltschutz in Mietverhältnissen abzielen. Um ihre Wirksamkeit zu messen, können verschiedene Messgrößen und Indikatoren herangezogen werden.</p>

                            <p>Die Wissenschaftler bei Torvik Gruen haben über 400 Messgrößen identifiziert. Diese Messgrößen sind nach Mietzwecken geordnet um eine individuelle Anpassung für den Mieter zu erreichen.</p>

                            <p>Die speziell zugeschnittenen Klauseln können in Mietverträge oder Nachträge aufgenommen werden.</p>

                            <p>Diese Messgrößen tragen dazu bei, die Wirksamkeit von Green Lease-Klauseln zu bewerten und Verbesserungen zu identifizieren, die zur Erreichung von Nachhaltigkeitszielen erforderlich sind.</p>

                            <p>Einmalig ist, dass die eingesparte Menge CO<sub>2</sub> sofort als Ergebnis zur Verfügung steht. Dieses Ergebnis kann in die Zertifizierung nach DGNB ( Innovationsraum) eingebracht werden.
                                Bei ECORE, CREEM und GRESB kann es in die Berechnung der Senkung des CO<sub>2</sub> Ausstoßes inkludiert werden.</p>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <Image src={"/assets/img/mission.svg"} fill="true" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default mission;