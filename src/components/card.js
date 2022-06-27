import React from 'react';
import {Link} from 'react-router-dom';

import styles from './card.module.css';


const Card = (props) => {
     const {image , name , price ,info ,id}= props;
     
     console.log(props)
    return (
        <a href={<Link to={`/products/${id}`}></Link>} className={styles.divlink} >
            <div className={styles.container}  >
                <div className={styles.divimage}>
                    <img className={styles.image} src={image} alt='pic' loading='lazy' ></img>
                    <p className={styles.info}>{info}</p>

                </div>
                <div className={styles.specific}>
                    <p className={styles.Name} >{name}</p>
                    <p className={styles.price}>{price}$</p>
                </div>            
            </div>
         </a>
    );
};
 
export default Card;