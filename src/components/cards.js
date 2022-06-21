import React from 'react';
import styles from './cards.module.css'

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

const cards = () => {
   
    return (
        <div className={styles.MainContainer}>
          <Card id="1" image={p1} name="red pot" price="2" info="jgnrg gnergn grtnert optte ptetptk erk tt ertggmfmgdgm mgr reterbbfb vgdfvfvbfg rterbf dgzhgngbzgbfg hf"/> 
          <Card id="2" image={p2} name=" pot" price="1" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>
          <Card id="3" image={p3} name="gdfggf pot" price="2.3" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>  
          <Card id="4" image={p4} name="avbiusdnfdfnvdfvndf plant" price="25" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>
          <Card id="5" image={p5} name="vndf pot" price="4" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/> 
          <Card id="6" image={p6} name="avbiusdfvnd" price="3.5" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>
          <Card id="7" image={p7} name="avbiusdfvndf " price="5" info="jgnrg gnergn grtnert JDFNDJKh fhfgh gffh gfhfghfgmb hfkgb mrkgjf kgtfbh F DKJGJDFKNVD"/>  
          <Card id="8" image={p8} name="avbiusdfvndf " price="10" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>
          <Card id="9" image={p9} name="avbiusdnpot" price="11.5" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/> 
          <Card id="10" image={p10} name="avbiusdnfdfnfvvvv" price="6" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>
          <Card id="11" image={p11} name="avbiusdnf" price="2" info="jgnrg gnergn grtnert JDFNDJKF DKJGJDFKNVD"/>  
        </div>
    )
};
export default cards;