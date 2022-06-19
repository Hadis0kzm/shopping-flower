import React from 'react';
/* import { Route , Routes } from 'react-router-dom'; */

import Slider from'./components/Banner';
import Products from './components/mainProduct';

function App() {
  return (
    <div>
      < Slider/>
      < Products/>
      {/* <Routes>
        <Route path='/' element={< Slider/> } /> 
        <Route path='/' element={< Products/>} />
      </Routes> */}
    </div>
  );
}

export default App;
