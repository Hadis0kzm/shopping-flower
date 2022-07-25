import React ,{useContext} from 'react';
//context
import { CartContext } from '../context/CartContext';
//component
import ShopcartItem from './ShopcartItem';
//style
import styles from './ShopCart.module.css';

const ShopCart = () => {
    const{state,dispatch}=useContext(CartContext);
    return (
        <div>
            <ul>
            {
                state.selectedItem.map(item => <ShopcartItem key={item.id} data={item}/>)
            }
            </ul>
            {

                state.itmCounter>0 && 
                <div>
                    <span>
                        <p>Total items:{state.itmCounter}</p>
                        <p>Total payment:{state.totalprice}</p>
                    </span><span>
                     <button className={styles.btn}  onClick={()=>{dispatch({type:"CHECKOUT"})}}>Checkout</button>
                     <button className={styles.btn} onClick={()=>{dispatch({type:"CLEAR"})}}>Clear all items</button>
                    </span>
                </div>
            }    
            {
                state.checkout  && <h2> CheckOut succesfully</h2>
                
            }
            {
                !state.checkout  && state.itmCounter===0 && <h2> Thanks to come BelShop
                    
                </h2>
                
            }
        </div>
    );
};

export default ShopCart;