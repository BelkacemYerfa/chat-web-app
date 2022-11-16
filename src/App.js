import './input.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ; 
import {BubblyContainer } from 'react-bubbly-transitions'
import { Account } from './Pages/SignIn';
import { Home } from './Pages/Home' ; 
import { useState } from 'react';
function App() {
  const [auth , setAuth] = useState({})
  return (
    <div className="App">
       <Router>
        <BubblyContainer />
        <Routes>
          <Route path='/' element={<Account setAuth = {setAuth} />} ></Route>
          <Route path='/Home' element={<Home auth={auth} />} ></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
