import React from 'react';

import styles from './Footer.module.css';


const Footer = () => {
    

    return (
        <footer className={styles.container} >
            
            <div className={styles.bottom}>
                <p>© 2022, BelShopping.com, Inc. or its affiliates</p>
            </div>
        </footer>
    );
};

export default Footer;