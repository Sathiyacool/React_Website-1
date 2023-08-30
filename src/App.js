import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Placestovisit from './Components/Placestovisit';
import Timetovisit from './Components/Timetovisit';
import Food from './Components/Food';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/places' element={ <Placestovisit />} /> 
        <Route path='Time' element={<Timetovisit />}></Route> 
        <Route path='/food' element={<Food />}></Route>
      </Routes>

    </div>
  );
}

export default App;
