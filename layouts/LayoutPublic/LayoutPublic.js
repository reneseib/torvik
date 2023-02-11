import React from 'react';
import Header from '../../components/Header';

import styles from './styles.module.scss';

const LayoutPublic = ({ children }) => {
    return (
        <div className={styles.layoutPublicWrapper}>
            <Header />
            {children}
        </div>
    );
};

export default LayoutPublic;