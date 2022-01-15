
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Movies from './Component/Movies';
import CastCrew from './Component/CastCrew'

const App=()=> {
  return (
    <div className="App">
      
      <Router>
        <Routes>

        <Route exact={true} path='/' element={<Movies/>}/>
        <Route  exact={true} path='/castCrew' element={<CastCrew />}/>
        </Routes>

  
        

      </Router>
       
    </div>
  );
}

export default App;
