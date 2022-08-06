import React,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
//context
import { ProductsContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
//FUNCTIONS
import { IsInCart , quantityCount} from '../helper/function';



const ProductDetail = () => {
    const params=useParams()
    const Id=params.id;
    const data= useContext(ProductsContext);
    const product = data[Id - 1];
    const{title , image ,description , price,id  }= product || {};
    
    const{ state, dispatch}=useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img alt='img' src={image} className={styles.imagee}></img>
            </div>
            <div className={styles.right}>
                <div className={styles.rightup}>
                    <h2> {title }  </h2><br></br>
                    <h3 style={{color:"var(--SabzPor)", textShadow:"0 0 white"}}>{price}  $</h3 ><br/>
                    <div >
                    {
                            quantityCount(state,id)>0 && <span className={styles.counter}>{quantityCount(state,id)}</span>
                        }
                       {  IsInCart(state,id )?
                            <button className={styles.btn} onClick={()=>{dispatch({type:"INCREASE", payload: product})}}>+</button>:
                            <button className={styles.btnword}  onClick={()=>{dispatch({type:"ADDITEM", payload: product})}}>Buy</button>
                        }
                        {
                            quantityCount(state ,id)>1 && <button className={styles.btn}  onClick={()=>{dispatch({type:"DECREASE", payload: product})}}>-</button>
                        }
                        
                        {
                            quantityCount(state ,id)===1 &&  <button className={styles.btnword}  onClick={()=>{dispatch({type:"REMOVEITEM", payload: product})}}>Remove</button>
                        }
                    </div>
                </div>
                    <div className={styles.rightdown}>
                        <div className={styles.detail}>{description}</div>
                    </div>
                
            </div>
            
        </div> 
    );
};

export default ProductDetail;