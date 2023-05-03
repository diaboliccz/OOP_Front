import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Comment } from "./Comment";
import ViewCart from './components/ViewCart';
import ContactUs from './components/Contact';
import Cards from './components/Cards';
import LoginForm from './components/Login';
import RegisterFrom from './components/Register';
import {AddCart} from './AddCart';
import Navbar from './components/Navbar';
import HotelView from './components/HotelPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/comment" element={<Comment />} /> 
          <Route path='/Cart' element={<ViewCart/>} /> 
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/hotels' element={<Cards/>} />
          <Route path='/sign-up'element={<LoginForm/>} />
          <Route path='/register'element={<RegisterFrom/>} />
          {/* <Route path='/addcart'element={<AddCart/>} /> */}
          <Route path='/view_hotel'element={<HotelView/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);