import React ,{useContext } from 'react';
import styles from './cards.module.css'
//component
import Card from './card';

//context
import {ProductsContext} from '../context/ProductContext';

const Cards = () => {

  const productapi = useContext(ProductsContext);

    return (
        <div className={styles.MainContainer}>
          {
          productapi.map( (item )=> <Card key={item.id} data={item}/>)
          }
        </div>
    )
};
export default Cards;