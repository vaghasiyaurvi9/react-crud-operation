import './App.css';
import Crud from './Crud';
import { Routes, Route } from "react-router-dom"
import Adddata from './Adddata';
import Update from './Update';
import UseRef from './UseRef';

function App() {

  

  return (
    
    <Routes>
    <Route path="/" element={ <Crud/> } />
    <Route path="/adddata" element={ <Adddata/> } />
    <Route path="/:id" element={ <Update/> } />
    <Route path="/useref" element={ <UseRef/> } />
    
   
   
  </Routes>
  );
}

export default App;
