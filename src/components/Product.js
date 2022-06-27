import React from 'react';

import styles from './Product.module.css';
import imge from '../images/20.png'
const Product = (props) => {
    const { name , price ,id}= props;
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img alt='img' src={imge} className={styles.imagee}></img>
            </div>
            <div className={styles.right}>
                <div className={styles.rightup}>
                    <h1>{name }h1{id} </h1>
                    <h5>{price}price $</h5>
                    <button className={styles.btn}>ADD TO CART</button>
                    <div className={styles.detail}>sfdfdfdgfgt</div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Product;