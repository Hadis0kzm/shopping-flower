import React,{useContext} from 'react';
//function
import { short } from '../helper/function';
//context
import {CartContext} from '../context/CartContext';
//style
import styles from './ShopCart.module.css';


const ShopcartItem = (props) => {
    const {dispatch}=useContext(CartContext)
    const{title,price, quantity}=props.data;
    
    return (
        <ul>
            <li> 
                <span>{short(title)}</span>
                <span>{price}</span>
                <span>({quantity})</span>
                <span>
                {
                    quantity>1 ? <button className={styles.btn} onClick={()=>{dispatch({type:"DECREASE", payload: props.data})}}>-</button>:
                    <button className={styles.btn} onClick={()=>{dispatch({type:"REMOVEITEM", payload: props.data})}}>Remove</button>
                       
                }
                 <button className={styles.btn} onClick={()=>{dispatch({type:"INCREASE", payload:props.data})}}>+</button>
                
                </span>
            </li>
        </ul>
                
    );
                
};


export default ShopcartItem;