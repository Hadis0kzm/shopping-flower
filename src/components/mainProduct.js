/* import {useState} from 'react'; */

import styles from './mainProduct.module.css'

import Card from './card';
import React from 'react';


/* const cardimg=[{}] */
const mainProduct = () => {
    
    return (
        <div className={styles.MainContainer}>
          <Card >1</Card>  
          <Card>2</Card>
          <Card>3</Card>  
          <Card>4</Card>
          <div>5</div>  
          <div>6</div>
          <div>7</div>  
          <div>8</div>
          <div>9</div>  
          <div>10</div>  
        </div>
    )
};
export default mainProduct;