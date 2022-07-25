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
                    <h1> {title }  </h1>
                    <h5> {price}  $</h5>
                    <div>
                       {  IsInCart(state,id )?
                            <button  onClick={()=>{dispatch({type:"INCREASE", payload: product})}}>+</button>:
                            <button onClick={()=>{dispatch({type:"ADDITEM", payload: product})}}>ADD TO CART</button>
                        }
                        {
                            quantityCount(state ,id)>1 && <button  onClick={()=>{dispatch({type:"DECREASE", payload: product})}}>-</button>
                        }
                        {
                            quantityCount(state,id)>0 && <span>{quantityCount(state,id)}</span>
                        }
                        {
                            quantityCount(state ,id)===1 &&  <button onClick={()=>{dispatch({type:"REMOVEITEM", payload: product})}}>Remove</button>
                        }
                    </div>
                    <div>
                        <div className={styles.detail}>{description}</div>
                    </div>
                </div>
                
            </div>
            
        </div> 
    );
};

export default ProductDetail;