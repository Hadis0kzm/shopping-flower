import React,{ useReducer, createContext} from 'react';



const initialState ={
     selectedItem : [],
     number:0,
     totalprice:0,
     checkout:false
}

const reducer =(state , action)=>{
    switch(action.type){
        case "INCREASE":
            const indexI= state.selectedItem.findIndex(item => (item.id ===action.payload.id))
            state.selectedItem[indexI].quantity++;
            return{
                ...state
            }
            case "DECREASE":
                const indexD= state.selectedItem.findIndex(item => (item.id ===action.payload.id))
                state.selectedItem[indexD].quantity--;
                return{
                    ...state
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
                    selectedItem:[...state.selectedItem]
                }
        case "REMOVEITEM":
            const newSelectedItem= state.selectedItem.filter(item =>(item.id !== action.payload.id));
            return{
                ...state,
                selectedItem:[...newSelectedItem]
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

    const [state , action]= useReducer(reducer , initialState)
    
    return (
        <CartContext.Provider value={{state:state , dispatch:action}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextfunc;