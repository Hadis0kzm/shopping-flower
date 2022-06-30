import React from 'react';
import { useContext } from 'react';
import styles from './Product.module.css';
//context
import { ProductsContext } from '../context/ProductContext';

const ProductDetail = (props) => {
    const id=props.match.params.id;
    const data= useContext(ProductsContext);
    const product = data[id - 1];
    const{title , image ,description , price }= product;
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img alt='img' src={image} className={styles.imagee}></img>
            </div>
            <div className={styles.right}>
                <div className={styles.rightup}>
                    <h1> {title }  </h1>
                    <h5> {price}  $</h5>
                    <div>
                        <button className={styles.btn}>ADD TO CART</button>
                    </div>
                    <div>
                        <div className={styles.detail}>{description}</div>
                    </div>
                </div>
                
            </div>
            
        </div> 
    );
};

export default ProductDetail;