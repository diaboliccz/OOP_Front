import Axios from "axios";
import { useEffect, useState } from "react";

export const Comment = () => {
    const [input_text, setText] = useState("")
    const [hotel_name, setHotel] = useState("")
    const [rating, setRating] = useState(0)
    const [hotel_list, setHotelList] = useState({})

    const inp = {
        "search_text": "",
        "check_in_date": "12-4-2023",
        "check_out_date" : "15-4-2023",
        "sleeps": 2,
        "room" : 1
      };

    const send_comment = () => {
        let comment = { 
            "hotel_name" : hotel_name,
            "comment" : input_text,
            "rating" : parseInt(rating)
        }
        console.log(comment);
        Axios.post("http://127.0.0.1:8000/create_comment/", comment).then((res) => {
          console.log(res.data);
        });
    }
    
    const input_handler = (events) => {
        setText(events.target.value);
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
    }

    const set_rating = (event) => {
        setRating(event.target.value)
    }

    return (
        <div>
            <select onChange={hotel_handler} value={hotel_name}>
                <option disabled="True"></option>
                {Object.keys(hotel_list).map((key) => <option key={key} value={key}>{key}</option>)}
            </select>
            <input type="text" onChange={input_handler}/>
            <select onChange={set_rating} value={rating}>
            {
                [...Array(6)].map((_, i) => i)
                            .map(i => <option key={i} value={i}>{i}</option>)
            }
            </select>
            <button onClick={send_comment}>test</button> 
        </div>
      
    )
}
