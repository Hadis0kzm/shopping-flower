import React,{useState,useEffect,createContext} from 'react';
//api func
import { GetProducts } from '../services/api';
const ProductsContext =createContext();

const ProductContextfunc = (props) => {

    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchapi =async()=>{
        setProducts(await GetProducts() );
         }
        fetchapi();
        },[])

    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextfunc;