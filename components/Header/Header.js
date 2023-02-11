import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>HEADER</div>
            </div>
        </div>
    );
};

export default Header;