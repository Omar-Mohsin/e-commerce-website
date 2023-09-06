
import React from 'react';
import Home from './components/Routes-Component/Home';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Cart from "./components/Routes-Component/Cart-Component/Cart";
import Detile from "./components/Routes-Component/Detile";
function App() : JSX.Element {



  return (
   <div>
    
 <Router>
 <Routes>
    <Route path ='/' element ={<Navbar/>}>
      <Route index  element={<Home />} />
       <Route path="/cart" element={<Cart />}/>
       <Route path="/Detile/:id" element={<Detile />} />


    </Route>

    </Routes>

 </Router>
 
   </div>
  );
}

export default App;
