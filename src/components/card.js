import React from 'react';
import {Link} from 'react-router-dom';

import styles from './card.module.css';
/* import Detailproduct from './Product' */

/* <Link to={`/Products/${id}`}></Link> */


const card = (props) => {
     const {image , name , price ,info ,id}= props;
    return (
        <div className={styles.container}  >
            <div className={styles.divimage}>
                <img className={styles.image} src={image} alt='pic' loading='lazy' ></img>
                <p className={styles.info}>{info}</p>
                
            </div>
            <div className={styles.specific}>
                <p className={styles.Name} >{name}</p>
                <p className={styles.price}>{price}$</p>
                <button onClick={(event)=>{ <Link to={`/Products/${id}`}></Link>} }>detail</button>
            </div>            
        </div>
    );
};
 
export default card;