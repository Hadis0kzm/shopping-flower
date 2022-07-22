import React from 'react';

import styles from './Footer.module.css';
import logo from '../images/bel_flower-blackzoom-removebg-.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.toprightlogo}>
                    <img src={logo} alt='logo-belflower' className={styles.logo}></img>
                </div>
                {/* <div className={styles.topcentersocialmedia}>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                </div> */}
                <div className={styles.topleft}></div>
            </div>
            <div className={styles.bottom}>
                <p>© 1996-2022, Belflower.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default Footer;