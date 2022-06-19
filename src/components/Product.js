import React from 'react';

import styles from './Product.module.css';

const Product = (props) => {
    const {image , name , price ,info,id}= props;
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.rightup}>
                    <h1>{name }{id} </h1>
                    <h5>{price}</h5>
                    <button>ADD TO CART</button>
                </div>
                <div className={styles.rightbottom}>
                    <ul>
                        <li>{info}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.left}>
                <img alt={name} src={image}></img>
            </div>
        </div>
    );
};

export default Product;