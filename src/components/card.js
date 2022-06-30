import React from 'react';
import {Link} from 'react-router-dom'; 
import styles from './card.module.css';
//functions
import {short} from '../helper/function';


const Card = ({data}) => {
  
    return (
         <Link to={`/Products/${data.id}`} className={styles.divlink} > 
            <div className={styles.container}  >
                <div className={styles.divimage}>
                    <img className={styles.image} src={data.image} alt='pic' loading='lazy' ></img>
                    <p className={styles.info}>{data.description}</p>

                </div>
                <div className={styles.specific}>
                    <p className={styles.Name} >{short(data.title)}</p>
                    <p className={styles.price}>{data.price}$</p>
                </div>            
            </div>
         </Link> 
    );
};
 
export default Card;