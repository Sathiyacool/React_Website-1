import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Placestovisit from './Components/Placestovisit';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Timetovisit from './Components/Timetovisit';



function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/places' element={ <Placestovisit />} /> 
        <Route path='Time' element={<Timetovisit />}></Route> 
      </Routes>

    </div>
  );
}

export default App;
