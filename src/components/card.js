import React from 'react';
/* import {Navigate} from 'react-router-dom'; */

import styles from './card.module.css';
import Detailproduct from './Product'

/* <Link to={`/Products/${id}`}></Link> */


const card = (props) => {
     const {image , name , price ,info ,id}= props;
    return (
        <div className={styles.container} onClick={(event)=>{ <Detailproduct id={id}/>} } >
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