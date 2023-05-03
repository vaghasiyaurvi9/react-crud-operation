
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Registerform from './components/Registerform';
import Loginform from './components/Loginform';

function App() {
  return (
   <>
     <Routes>
        <Route path="/" element={ <Registerform/> } />
        <Route path="/loginform" element={ <Loginform/> } />
  
      </Routes>
   </>
  );
}

export default App;
