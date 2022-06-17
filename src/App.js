import { Route , Routes } from 'react-router-dom';

import Slider from'./components/Banner';
import Products from './components/mainProduct';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={< Slider/>}  /> 
        <Route path='/Products' element={< Products/>} />
      </Routes>
    </div>
  );
}

export default App;
