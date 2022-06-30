import React from 'react';
import { Redirect, Route , Switch } from 'react-router-dom';

import ProductContextfunc from './context/ProductContext';
import Header from './components/header';
import Landing from './components/Landing';
import Products from './components/cards';
import Detailproduct from './components/ProductDetail';
/* import Footer from './components/Footer'; */


function App() {
  return (
    <>
      <Header/> 
      <ProductContextfunc> 
        <Switch>
          <Route path='/Products/:id' component={Detailproduct} />
          <Route path='/Products' component={Products} />
          <Route path='/' component={Landing} /> 
          <Redirect to="/" />
        </Switch>
       {/* <Footer/> */}
      </ProductContextfunc>
    </>
  );
}

export default App;
