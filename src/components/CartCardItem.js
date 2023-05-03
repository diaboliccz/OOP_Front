import React from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function CartItem(props) {
  console.log(props.hotel, props.check_in_date, props.check_out_date, props.sleeps, props.text)
  const add_to_cart = () => {
    let info = {
      "hotel_name" : props.hotel,
      "roomtype" : props.text,
      "check_in_date" : props.check_in_date,
      "check_out_date" : props.check_out_date
    }
    console.log(info)
    Axios.post('http://127.0.0.1:8000/add_to_cart', info).then((res) => {
      console.log(res.data)
      alert("Add to cart " + res.data["status"])
    });
  }

  return (
    <>
      <li className='cards__item'>
        <div onClick={add_to_cart} className='cards__item__link' href="#" >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 className='cards__item__text'>{props.text}</h1>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;