import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Placestovisit from './Components/Placestovisit';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/places' element={ <Placestovisit />} />  
      </Routes>

    </div>
  );
}

export default App;
