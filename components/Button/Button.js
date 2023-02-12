import React from 'react';

import styles from './styles.module.scss';

const Button = (props) => {
    return (
        <div className={styles.buttonWrapper}>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonText}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Button;