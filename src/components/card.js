import React from 'react';
import {Link} from 'react-router-dom';

import styles from './card.module.css';


const Card = ({data}) => {
  
    return (
        <a href={<Link to={`/products/${data.id}`}></Link>} className={styles.divlink} >
            <div className={styles.container}  >
                <div className={styles.divimage}>
                    <img className={styles.image} src={data.image} alt='pic' loading='lazy' ></img>
                    <p className={styles.info}>{data.description}</p>

                </div>
                <div className={styles.specific}>
                    <p className={styles.Name} >{data.title}</p>
                    <p className={styles.price}>{data.price}$</p>
                </div>            
            </div>
         </a>
    );
};
 
export default Card;