import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <Link href={"https://torvikgruen.de/impressum"}>
                    Impressum
                </Link>
            </div>
        </div>
    );
};

export default footer;