import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <img src="/assets/img/tglogov1.svg" width="100" height="40" />
                </div>
                <div className={styles.navWrapper}>
                    <ul>
                        <li className={styles.navItem}>Mission</li>
                        <li className={styles.navItem}>CO<sub>2</sub> Kalkulator</li>
                        <li className={styles.navItem}>Über uns</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;