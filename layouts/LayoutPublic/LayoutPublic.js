import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';

const LayoutPublic = ({ children }) => {
    return (
        <div className={styles.layoutPublicWrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutPublic;