import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.rightlogo}></div>
                <div className={styles.rightsocialmedia}></div>
            </div>
            <div className={styles.bottom}>
                <p>© 1996-2022, Belflower.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default Footer;