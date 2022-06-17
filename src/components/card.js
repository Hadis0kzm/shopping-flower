
import styles from './card.module.css'

import React from 'react';

const card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.divimage}>
                <img alt='pic'></img>
            </div>
            <div className={styles.specific}>
                <p className={styles.Name}></p>
                <p className={styles.price}></p>
            </div>            
        </div>
    );
};

export default card;