import React from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

function CartItem(props) {

  return (
    <>
      <li className='cards__item'>
        <div>
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