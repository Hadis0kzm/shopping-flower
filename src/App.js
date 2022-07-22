import React from 'react';
import { Redirect, Route , Switch } from 'react-router-dom';
//components
import Header from './components/header';
import Landing from './components/Landing';
import Products from './components/cards';
import Detailproduct from './components/ProductDetail';
/* import Footer from './components/Footer'; */
//context
import ProductContextfunc from './context/ProductContext';
import CartContextfunc  from './context/CartContext';

function App() {
  return (
    <>
      
      <ProductContextfunc> 
        <CartContextfunc> 
        <Header/> 
          <Switch>
            <Route path='/Products/:id' component={Detailproduct} />
            <Route path='/Products' component={Products} />
            <Route path='/' component={Landing} /> 
            <Redirect to="/" />
          </Switch>
        </CartContextfunc > 
      </ProductContextfunc>
     {  /* <Footer/> */}
    </>
  );
}

export default App;
