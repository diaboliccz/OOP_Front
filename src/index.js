import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Comment } from "./Comment";
import ViewCart from './components/ViewCart';
import ContactUs from './components/Contact';
import Card from './components/pages/Hotel';
import HotelSrivanna from './components/pages/Srivanna';
import Logins from './components/pages/Sign-Up';
import Regis from './components/pages/Regis';
import {AddCart} from './AddCart';
import Navbar from './components/Navbar';
import HotelView from './components/HotelSrivanna';

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
          <Route path='/hotels' element={<Card/>} />
          <Route path='/sign-up'element={<Logins/>} />
          <Route path='/register'element={<Regis/>} />
          <Route path='/addcart'element={<AddCart/>} />
          <Route path='/view_hotel'element={<HotelView/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);