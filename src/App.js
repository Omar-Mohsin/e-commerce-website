import React from 'react';
import Home from './components/Routes-Component/HomePage/Home';
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cart from "./components/Routes-Component/Cart-Component/Cart";
import Detile from "./components/Routes-Component/HomePage/Detail/Detile";
import Order from './components/Routes-Component/OrdersComponents/Order';
import SignIn from './components/Routes-Component/Validation-Component/SignIn';
import Profile from './components/Routes-Component/Validation-Component/Profile';
import { SelectUser } from './feature/auth/authSlice';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector(SelectUser);
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Detile/:id" element={<Detile />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="" />}
            />    </Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
