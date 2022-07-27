import React from 'react';
import {Slide} from 'react-slideshow-image';
import styles from './Banner.module.css';
import 'react-slideshow-image/dist/styles.css'

import imgcactus from '../images/sliderImages/cactus-slider.png';
import imgflower from '../images/sliderImages/flower-slider.png';
import imgcloths from '../images/sliderImages/clothes.jpg'

const slideimg=[{ 
     key:1,
     src:imgcactus},
  {
    key:2,
    src:imgflower},
    {
      key:3,
      src:imgcloths}
   ];

const Banner = () => {

    return (<>
    
     <div className={styles.sliderContainer}>
       <Slide easing="ease-in" className={styles.Slide} >
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideimg[0].src})`} }>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideimg[1].src})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${ slideimg[2].src})`}}>
              
            </div>
          </div>
          
        </Slide>
      </div> 
      </>  
    );
};

export default Banner;