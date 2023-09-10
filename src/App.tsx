import React from 'react';
import Home from './components/Routes-Component/Home';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Cart from "./components/Routes-Component/Cart-Component/Cart";
import Detile from "./components/Routes-Component/Detile";
import Order from './components/Routes-Component/Order';
import SignIn from './components/Routes-Component/sign-in-Component/SignIn';
function App() : JSX.Element {
  return (
   <div>
    
 <Router>
 <Routes>
    <Route path ='/' element ={<Navbar/>}>
      <Route index  element={<Home />} />
       <Route path="/cart" element={<Cart />}/>
       <Route path="/Detile/:id" element={<Detile />} />
       <Route path="/orders" element={<Order />} />
       <Route path="/signIn" element={<SignIn />} />


    </Route>

    </Routes>

 </Router>
 
   </div>
  );
}

export default App;
