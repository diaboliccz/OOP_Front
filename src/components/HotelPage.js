import './HotelPage.css';
import '../App.css'
import { useEffect, useState } from "react";
import { FaBed } from "react-icons/fa";
import './Cards.css';
import CartItem from './CartCardItem';
import { IoAccessibility } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import Axios from "axios";

function HotelView(){
    const [info, setInfo] = useState([]);
    const location = useLocation();
    const { from } = location.state;

    useEffect(() => {
        get_roomtype_info(); // This will be executed when the state changes
    }, []);


    const get_roomtype_info = () => {
        let search = {
        "hotel_name": from[0],
        "roomtype_list": from[1],
        };
        console.log(search)
        Axios.post('http://127.0.0.1:8000/roomtype_info', search).then((res) => {
            setInfo(res.data["result"]);
            console.log(res.data["result"])
        });
      }

    return (
       <div>
            <div className="header" style = {{backgroundImage : "url(/images/hotel1.jpg"}} >
                 <h1>{from[0]}</h1>
            </div>
            {/* <li className='fac'> */}
            {/* <h1>Facility</h1>
            </li>
            <li className='faci'>
            <p><FaCheck/>parking <FaCheck/>air-con <FaCheck/>wi-fi <FaCheck/>fitness <FaCheck/>airport-transfer</p>
            </li> */}
            {info && info.map((result, index) => {
                console.log(index)
                return (
                    <li className='type' >
                        <CartItem
                        src='images/Deluxe.jpg'
                        text= {from[1][index]}
                        label= {result["price"].toString() + " THB"}
                        path='/hoteldetail'
                        hotel = {from[0]}
                        check_in_date = {from[2]}
                        check_out_date = {from[3]}
                        sleeps = {from[4]}
                        
                        />
                        <h5><IoAccessibility/> {result["sleeps"]} sleeps &nbsp;
                        <FaBed/> {result["bed"]} </h5>
                    </li>
                )
            })}
                
        </div>
        
    )
}

export default HotelView 