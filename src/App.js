import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Header from './components/header';
import Landing from './components/Landing';
import Products from './components/cards';
import Detailproduct from './components/Product';
/* import Footer from './components/Footer'; */

function App() {
  return (
    <div>
     <Header/> 
      <Routes>
        <Route path='/' element={< Landing/> } /> 
        <Route path='/Products' element={< Products/>} />
        <Route path='/Products/:id' element={< Detailproduct/>} />

      </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
