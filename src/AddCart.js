import Axios from "axios";
import { useEffect, useState } from "react";

export const AddCart = () => {
    const [start_date, setStart] = useState("")
    const [end_date, setEnd] = useState("")
    const [hotel_name, setHotel] = useState("")
    const [roomtype_list, setRoomtypeList] = useState([])
    const [hotel_list, setHotelList] = useState({})
    const [roomtype, setRoomtype] = useState("")

    const inp = {
        "search_text": "",
        "check_in_date": "12-4-2023",
        "check_out_date" : "15-4-2023",
        "sleeps": 2,
        "room" : 1
      };

    const add_to_cart = () => {
        let reserved = { 
            "hotel_name" : hotel_name,
            "roomtype" : roomtype,
            "check_in_date" : start_date,
            "check_out_date" : end_date,
        }
        console.log(reserved);
        Axios.post("http://127.0.0.1:8000/add_to_cart/", reserved).then((res) => {
          console.log(res.data);
        });
    }
    
    const start_handler = (events) => {
        setStart(events.target.value);
    }

    const end_handler = (events) => {
        setEnd(events.target.value);
    }

    const get_hotel = () => {
        Axios.post('http://127.0.0.1:8000/search', inp).then((res) => {
            setHotelList(res.data.hotel_list);
            console.log(hotel_list)
        });
    }

    useEffect(() => {
        get_hotel();
      }, []);
    
    

    const hotel_handler = (events) => {
        setHotel(events.target.value);
        if(hotel_list[hotel_name]){
            console.log(hotel_list[hotel_name])
        }
        
    }

    const roomtype_handler = (events) => {
        setRoomtype(events.target.value);
    }

    return (
        <div>
            <select onChange={hotel_handler} value={hotel_name}>
                <option disabled="True"></option>
                {hotel_list && Object.keys(hotel_list).map((key) => <option key={key} value={key}>{key}</option>)}
            </select>
            <select onChange={roomtype_handler} value={hotel_name}>
                <option disabled="True"></option>
                {hotel_list && hotel_list[hotel_name] && hotel_list[hotel_name].map((key) => <option key={key} value={key}>{key}</option>)}
            </select>
            <input type="text" onChange={start_handler}/>
            <input type="text" onChange={end_handler}/>
            <button onClick={add_to_cart}>test</button> 
        </div>
      
    )
}
