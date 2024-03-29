import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//style&img
import  styles from './header.module.css'
import carticon from '../images/cart.png'
import logopic from '../images/bel_flower-blackzoom-removebg-.png'
//context
import {CartContext} from '../context/CartContext';



const Header = () => {
    const {state}= useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.right}>                
                <span  className={styles.searchcontainer}>
                    <input placeholder='' className={styles.input} /* value={seArch} onChange={setSeArch} */></input>
                    <svg className={styles.searchicon} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="64px" height="64px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"/></svg>                    
                </span> 
                <Link to={`/Shopcart`}>
                <img src={carticon} title={"Cart"} className={styles.cart} alt="cart" ></img > 
                {
                    state.itmCounter>0 &&  <p className={styles.itmCounter} >{ state.itmCounter }</p>
                }
                   
                </Link>
            </div>
            <div className={styles.center}>
                <img src={logopic} className={styles.logo} alt="bel-logo"></img>
            </div>
            <div className={styles.left} title={"Menu"} >
                <span className={styles.menu} ></span>
                <span className={styles.menu}></span>
                <span className={styles.menu}></span>        
            </div>
        </div>
    );
};
export default Header;
