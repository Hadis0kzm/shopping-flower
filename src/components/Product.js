import React from 'react';

import styles from './Product.module.css';

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={rightup}>
                    <h1></h1>
                    <h5></h5>
                    <button></button>
                </div>
                <div className={rightbottom}>
                    <ul></ul>
                </div>
            </div>
            <div className={styles.left}>
                <img></img>
            </div>
        </div>
    );
};

export default Product;