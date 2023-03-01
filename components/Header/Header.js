import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <img src="/assets/img/tglogo-sm.jpg" width="100" height="72" />
                </div>
                <div className={styles.navWrapper}>
                    <ul>
                        {/* <li className={styles.navItem}>Mission</li>
                        <li className={styles.navItem}>CO<sub>2</sub> Kalkulator</li>
                        <li className={styles.navItem}>Über uns</li> */}
                        <li className={styles.navItem}>
                            <Link href={"https://torvikgruen.de"}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className={styles.navIcons}>

                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" data-testid="PersonOutlineIcon"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>

                </div> */}
            </div>
        </div >
    );
};

export default Header;