import React from 'react';
import '../App.css'
import { Button } from './Button';
import './ViewCart.css';
import './CartCard.css';
import CartItem from './CartSum';
import { useEffect, useState } from "react";
import Axios from "axios";


function ViewCart() {
  const [info, setInfo] = useState([]);
  const [price, setPrice] = useState(0);
  

  useEffect(() => {
      get_cart(); // This will be executed when the state changes
  }, []);


  const reserve = () => {
    Axios.get('http://127.0.0.1:8000/check_out').then((res) => {
        alert("Reserve " + res.data["status"])
        get_cart()
    });
  }

  const get_cart = () => {
    Axios.get('http://127.0.0.1:8000/view_cart').then((res) => {
        setInfo(res.data["hotel_list"]);
        setPrice(res.data["summary"])
        console.log(res.data["hotel_list"])
    });
  }
  return (
    <div className='cart-container'> 
      <video src='video/Vidmoutain.mp4' autoPlay loop muted />
      <h1>YOUR CART</h1>
      <div className='cards'>
      <h1>Let's travel!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {info && info.map((room, index) => {
                console.log(index)
                return (
                    <li className='type' >
                        <CartItem
                        src='images/Deluxe.jpg'
                        text= {room["roomtype"]}
                        hotel = {room["hotel_name"]}
                        check_in_date = {room["check_in_date"]}
                        check_out_date = {room["check_out_date"]}
                        
                        />
                    </li>
                )
            })}
          </ul>
        </div>
      </div>
      <h2>Net Price {price}</h2>
    </div>

        
      <div className="reserve-button">
        <button className='btns' onClick={reserve}>
            Reserve Now
        </button>
        
      </div>
    </div>
  )
}

export default ViewCart 
