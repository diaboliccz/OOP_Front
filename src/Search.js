import Axios from "axios";
import { useEffect, useState } from "react";

export const Search = () => {
    const [input_text, setText] = useState("")

    const input_handler = (events) => {
        setText(events.target.value);
    }
    
    const search = () => {
        
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
            <button onClick={search}>test</button> 
        </div>
      
    )
}
