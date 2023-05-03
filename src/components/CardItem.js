import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' 
          to="/view_hotel"
          state={{ from: [props.hotel_name, props.roomtype, props.check_in_date, props.check_out_date, props.sleeps]}}
        >
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.hotel_name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;