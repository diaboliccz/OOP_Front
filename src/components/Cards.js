import React from 'react';
import Axios from "axios";
import './Cards.css';
import CardItem from './CardItem';
import JasonData from './TestData.json'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";


function Cards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [start_date, setStart] = useState("");
  const [end_date, setEnd] = useState("");
  const [sleeps, setSleep] = useState(0);
  const [hotel_list, setHotelList] = useState({})
  const [search_text, setText] = useState({})

  const [hotel_type, setType] = useState({});  
  const [count_bed, setBed] = useState({})
  const [count_hotel_fac, setHotelFac] = useState({})
  const [count_rating, setRating] = useState({})
  const [count_payment, setPayment] = useState({})

  const [type_list, setTypeList] = useState([])
  const [bed_list, setBedList] = useState([])
  const [payment_fac_list, setFacList] = useState([])
  const [rating_list, setRatingList] = useState([])

  const count_setter = (res) => {
    setHotelList(res.data.hotel_list);
    hotel_type_setter(res.data.hotel_type);
    bed_stter(res.data.count_bed);
    set_Fac(res.data.count_hotel_fac);
    set_rating(res.data.count_rating);
    set_payment(res.data.count_payment);
  }

  const filter_func = () => {
    search_hotel();
    console.log(type_list, bed_list, payment_fac_list, rating_list);
    type_list.forEach((attr) => {
      let search = {"hotel_list" : hotel_list};
      search["attr"] = attr;
      Axios.post('http://127.0.0.1:8000/hotel_type_filter', search).then((res) => {
        count_setter(res);
      });
    });
    
    bed_list.forEach((attr) => {
      let search = {"hotel_list" : hotel_list};
      search["attr"] = attr;
      Axios.post('http://127.0.0.1:8000/bed_filter', search).then((res) => {
        count_setter(res);
      });
    });

    payment_fac_list.forEach((attr) => {
      let search = {"hotel_list" : hotel_list};
      search["attr"] = attr;
      Axios.post('http://127.0.0.1:8000/payment_fac_filter', search).then((res) => {
        count_setter(res);
      });
    });

    rating_list.forEach((attr) => {
      let search = {"hotel_list" : hotel_list};
      search["attr"] = attr;
      Axios.post('http://127.0.0.1:8000/rating_filter', search).then((res) => {
        count_setter(res);
      });
    });
  }

  useEffect(() => {
    filter_func(); // This will be executed when the state changes
  }, [type_list, payment_fac_list, bed_list, rating_list]);


  const type_handler = (value) => {
    const newChecked = [...type_list];
    const currentIndex = type_list.indexOf(value);
    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setTypeList(newChecked);
  }

  const bed_handler = (value) => {
    const newChecked = [...bed_list];
    const currentIndex = bed_list.indexOf(value);
    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setBedList(newChecked);
  }

  const fac_handler = (value) => {
    const newChecked = [...payment_fac_list];
    const currentIndex = payment_fac_list.indexOf(value);
    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setFacList(newChecked);
  }

  const rating_handler = (value) => {
    const newChecked = [...rating_list];
    const currentIndex = rating_list.indexOf(value);
    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setRatingList(newChecked);
  }

  const hotel_type_setter = (hotel_type_ref) => {
    let temp = {};
    for (const [key, value] of Object.entries(hotel_type)) {
      if(Object.keys(hotel_type_ref).indexOf(key) === -1){
        temp[key] = 0;
      } else {
        temp[key] = hotel_type_ref[key]
      }
    }
    setType(temp);
  }

  const bed_stter = (bed_ref) => {
    let temp = {};
    for (const [key, value] of Object.entries(count_bed)) {
      if(Object.keys(bed_ref).indexOf(key) === -1){
        temp[key] = 0;
      } else {
        temp[key] = bed_ref[key]
      }
    }
    setBed(temp);
  }

  const set_Fac = (fac_ref) => {
    let temp = {};
    for (const [key, value] of Object.entries(count_hotel_fac)) {
      if(Object.keys(fac_ref).indexOf(key) === -1){
        temp[key] = 0;
      } else {
        temp[key] = fac_ref[key]
      }
    }
    setHotelFac(temp);
  }

  const set_payment = (pay_ref) => {
    let temp = {};
    for (const [key, value] of Object.entries(count_payment)) {
      if(Object.keys(pay_ref).indexOf(key) === -1){
        temp[key] = 0;
      } else {
        temp[key] = pay_ref[key]
      }
    }
    setPayment(temp);
  }

  const set_rating = (rating_ref) => {
    let temp = {};
    for (const [key, value] of Object.entries(count_rating)) {
      if(Object.keys(rating_ref).indexOf(key) === -1){
        temp[key] = 0;
      } else {
        temp[key] = rating_ref[key]
      }
    }
    setRating(temp);
  }

  const input_box = (counter, handler) => {
    return Object.keys(counter).map((key) => {
      if(counter[key] !== 0){
        return <div className="check-box"> <input type="checkbox" onChange={() => handler(key)}/>{key} : {counter[key]}</div>
      }
      else {
        return <div className="check-box"> <input type="checkbox" disabled="True" onChange={() => handler(key)}/>{key} : {counter[key]}</div>
      }
      
    });
  }

  const search_hotel = () => {
    let search = {
      "search_text": searchTerm,
      "check_in_date": start_date,
      "check_out_date" : end_date,
      "sleeps": parseInt(sleeps)
    };
    setText(search);
    Axios.post('http://127.0.0.1:8000/search', search).then((res) => {
      setHotelList(res.data.hotel_list);
      setBed(res.data.count_bed);
      setType(res.data.hotel_type);
      setHotelFac(res.data.count_hotel_fac);
      setRating(res.data.count_rating);
      setPayment(res.data.count_payment);
      console.log(res.data.hotel_list)
    });
  }

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="Search">
        <input type="text" placeholder="Search Hotel" onChange={event => {setSearchTerm(event.target.value)}} />
        <input type="date" onChange={event => {setStart(event.target.value)}} />
        <input type="date" onChange={event => {setEnd(event.target.value)}} />
        <input type="text" placeholder="Sleeps" onChange={event => {setSleep(event.target.value)}} />
        <button onClick={search_hotel}>Search</button>
      </div><div className='cards__container'>
      <div className="filter-box">
        {input_box(hotel_type, type_handler)}
      </div>
      <div className="filter-box">
        {input_box(count_bed, bed_handler)}
      </div>
      <div className="filter-box">
        {input_box(count_hotel_fac, fac_handler)}
      </div>
      <div className="filter-box">
        {input_box(count_payment, fac_handler)}
      </div>
      <div className="filter-box">
        {input_box(count_rating, rating_handler)}
      </div>
      <div className='cards__wrapper'>
      <ul className='cards__items'>
      {Object.keys(hotel_list).map((key) => <div key={key}>
              <CardItem
                src='images/hotel1.jpg'
                hotel_name = {key}
                roomtype = {hotel_list[key]}
                check_in_date = {start_date}
                check_out_date = {end_date}
                sleeps = {parseInt(sleeps)}
              />
        
      </div>)}
      </ul>
      </div>
      </div>
    </div>
    
  );
}

export default Cards;
