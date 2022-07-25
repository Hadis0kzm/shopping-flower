import React from 'react';
import {  Route , Routes ,Navigate} from 'react-router-dom';
//components
import Header from './components/header';
import Landing from './components/Landing';
import Products from './components/cards';
import Detailproduct from './components/ProductDetail';
import Footer from './components/Footer'; 
import ShopCart from './components/ShopCart';
//context
import ProductContextfunc from './context/ProductContext';
import CartContextfunc  from './context/CartContext';



function App() {
  return (
    <>
      
      <ProductContextfunc> 
        <CartContextfunc> 
        <Header/> 
          <Routes>
            <Route path='/Products/:id' element={<Detailproduct/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Shopcart' element={<ShopCart/>}/>
            <Route path='/' element={<Landing/>} /> 
            <Route path='/*' element={<Navigate to="/" />} />
          </Routes>
        </CartContextfunc > 
      </ProductContextfunc>
       <Footer />  
    </>
  );
}

export default App;
