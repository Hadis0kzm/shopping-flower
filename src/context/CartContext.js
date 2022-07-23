import React,{ useReducer, createContext} from 'react';

const initialState ={
     selectedItem : [],
     itmCounter:0,
     totalprice:0,
     checkout:false
}

const SumItem=items =>{
    const itmCounter = items.reduce((total,product)=> total + product.quantity , 0);
    const total=items.reduce((total,product) =>(total+ product.price * product.quantity , 0).toFixed(2))
    return{ itmCounter,total};
}



const reducer =(state , action)=>{
    console.log(state)
    switch(action.type){
        case "INCREASE":
            const indexI= state.selectedItem.findIndex(item => item.id ===action.payload.id);
            state.selectedItem[indexI].quantity=(state.selectedItem[indexI].quantity) +1/2;
            return{
                ...state,
                ...SumItem(state.selectedItem)
            }
            case "DECREASE":
                const indexD= state.selectedItem.findIndex(item => item.id ===action.payload.id);
                state.selectedItem[indexD].quantity=(state.selectedItem[indexD].quantity) -1/2;
                return{
                    ...state,
                    ...SumItem(state.selectedItem)
                }    
            case "ADDITEM":
             if(!state.selectedItem.find(item => item.id === action.payload.id))
                {state.selectedItem.push({
                    ...action.payload,
                    quantity:1
                     })
                    }

                return{
                    ...state,
                    selectedItem:[...state.selectedItem],
                    ...SumItem(state.selectedItem)
                }
        case "REMOVEITEM":
            const newSelectedItem= state.selectedItem.filter(item =>(item.id !== action.payload.id));
            return{
                ...state,
                selectedItem:[...newSelectedItem],
                ...SumItem(newSelectedItem)
            }
        case "CHECKOUT":
            return{
                selectedItem : [],
                 number:0,
                 totalprice:0,
                 checkout:true
            } 
        case "CLEAR":
            return{
                selectedItem : [],
                 number:0,
                 totalprice:0,
                 checkout:false
            } 
        default:
            return state;   
    }
}
export const CartContext =createContext();

const CartContextfunc = ({children}) => {

    const [state , dispatch]= useReducer(reducer , initialState)
    
    return (
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextfunc;