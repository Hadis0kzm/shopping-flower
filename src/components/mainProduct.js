import React from 'react';
import styles from './mainProduct.module.css'

import Card from './card';

/* import {useState} from 'react'; */

import p1 from '../images/pot-cactus3.jpg';
import p2 from '../images/flower1.jpg';
import p3 from '../images/plant2.jpg';
import p4 from '../images/plant3.jpg';
import p5 from '../images/pot-cactus2.jpg';
import p6 from '../images/plant-pot7.jpg';
import p7 from '../images/flower2.jpg';
import p8 from '../images/plant1.jpg';
import p9 from '../images/flower4.jpg';
import p10 from '../images/cactus1.jpg';
import p11 from '../images/flower3-rm.png';

const mainProduct = () => {
   
    return (
        <div className={styles.MainContainer}>
          <Card image={p1} name="red pot" price="2" info="jgnrg gnergn grtnert optte ptetptk erk tt ertggmfmgdgm mgr reterbbfb vgdfvfvbfg rterbf dgzhgngbzgbfg hf"/> 
          <Card image={p2} name=" pot" price="1"/>
          <Card image={p3} name="gdfggf pot" price="2.3"/>  
          <Card image={p4} name="avbiusdnfdfnvdfvndf pot" price="25"/>
          <Card image={p5} name="vndf pot" price="4"/> 
          <Card image={p6} name="avbiusdfvnd" price="3.5"/>
          <Card image={p7} name="avbiusdfvndf pot" price="5"/>  
          <Card image={p8} name="avbiusdfvndf pot" price="10"/>
          <Card image={p9} name="avbiusdnpot" price="11.5"/> 
          <Card image={p10} name="avbiusdnfdfnfvvvvvvvvvvvvdfvndf pot" price="6"/>
          <Card image={p11} name="avbiusdnf" price="2" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>  
        </div>
    )
};
export default mainProduct;