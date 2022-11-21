//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './Home';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import Products from './Products';
import { Switch } from "react-router-dom"
import Product from './component/Product';
import { useState } from 'react';
import Basket from "./component/Basket"
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './component/HomePage'
import Login from './component/Login';
import SignUp from './component/Signup';
import DeliveryDetails from './component/DeliveryDetails';

function App() {



  return (
    <>


      
      <Provider store={store}>
      <div className='row'>

        {/* <Products /> */}
        {/* <Basket></Basket> */}
       
          
       
        <Routes>

          <Route exact path='/' element={<HomePage/>} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path='/item' element={<Product />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/deliverydetails' element={<DeliveryDetails />} />
          
        </Routes>
     

      </div >
      </Provider>
    </>
  );
};

export default App;
