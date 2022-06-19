import React from 'react';

import styles from './card.module.css';
import Product from './Product'


const card = (props) => {
     const {image , name , price ,info}= props;
    return (
        <div className={styles.container} onClick={<Product/>}>
            <div className={styles.divimage}>
                <img className={styles.image} src={image} alt='pic' loading='lazy' ></img>
                <p className={styles.info}>{info}</p>
            </div>
            <div className={styles.specific}>
                <p className={styles.Name} >{name}</p>
                <p className={styles.price}>{price}$</p>
            </div>            
        </div>
    );
};
 
export default card;