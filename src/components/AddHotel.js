import Axios from "axios";
import { useEffect, useState } from "react";
import './AddHotel.css'

export const AddHotel = () => {
    const [hotel_name, setHotelName] = useState("")
    const get_hotel_name = (e) => {
        setHotelName(e.target.value)
        console.log(hotel_name)
    }

    const hotel_option = [
        {value: '', text: "Hotel type Option"},
        {value: 'Hotel', text: "Hotel" },
        {value: 'Apartments', text: 'Apartments'}
    ]
    const [hotel_type, setHotelType] = useState(hotel_option[0].value)
    const get_hotel_type = (e) => {
        setHotelType(e.target.value)
        console.log(e.target.value)
    }

    const [address, setAddress] = useState("")
    const get_address = (e) => {
        setAddress(e.target.value)
        console.log(address)
    }

    const [map, setMap] = useState("")
    const get_map = (e) => {
        setMap(e.target.value)
        console.log(map)
    }

    const policies_option = [
        {value: '', text: "Policies Option"},
        {value: 'NO good', text: "NO good" },
    ]
    const [policies, setPolicies] = useState(policies_option[0].value)
    const get_policies = (e) => {
        setPolicies(e.target.value)
        console.log(e.target.value)
    }

    const property_facilities_option = [
        {value: 1, text: "Swimming Pool" },
        {value: 1, text: "Internet" },
        {value: 1, text: "Car Park" },
        {value: 1, text: "Gym" },
        {value: 1, text: "Non Smoking" },
        {value: 1, text: "Spa" },
        {value: 1, text: "Restaurant" },
        {value: 1, text: "Pet" },
    ]
    //[0,0,0,0,0,0,0,0]
    const [property_facilities, setPropertyFacilities] = useState(new Array(property_facilities_option.length).fill(0))
    const get_property_facilities = (position) => {
        const updatedCheckState = property_facilities.map((item, index)=> index === position ? !item: item)
        setPropertyFacilities(updatedCheckState)
        console.log(updatedCheckState)
    }

    const payment_option_option = [
        {value: 1, text: "Free cancel" },
        {value: 1, text: "Pay at hotel" },
        {value: 1, text: "Pay later" },
        {value: 1, text: "Pay now" },
        {value: 1, text: "Credit card" },
    ]
    const [payment_option, setPaymentOption] = useState(new Array(payment_option_option.length).fill(0))
    const get_payment_option = (position) => {
        const updatedCheckState = payment_option.map((item, index)=> index === position ? !item: item)
        setPaymentOption(updatedCheckState)
        console.log(updatedCheckState)
    }
    const add_new_hotel = () => {
        let hotel_info = {
            "hotel_name": hotel_name,
            "hotel_type" : hotel_type,
            "address": address,
            "map": map,
            "policies": policies,
            "property_facilities": property_facilities,
            "payment_option" : payment_option
        }
        console.log(hotel_info);
        Axios.post("http://127.0.0.1:8000/add_hotel/", hotel_info).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div>
            <div>
                <h4>Hotel name</h4>
                <input type="text" className="hotel_name" id="text_box" onChange={get_hotel_name}></input>
            </div>
            <div>
                <h4>Hotel type</h4>
                <select value={hotel_type} onChange={get_hotel_type}>
                    {hotel_option.map(hotel_option => (
                        <option key={hotel_option.value} value={hotel_option.value}>
                            {hotel_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Address</h4>
                <input type="text" className="address" id="text_box" onChange={get_address}></input>
            </div>
            <div>
                <h4>Map</h4>
                <input type="text" className="map" id="text_box" onChange={get_map}></input>
            </div>
            <div>
                <h4>Policies</h4>
                <select value={policies} onChange={get_policies}>
                    {policies_option.map(policies_option => (
                        <option key={policies_option.value} value={policies_option.value}>
                            {policies_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Property facilities</h4>
                <ul className="prop-list">
                    {property_facilities_option.map(({value, text}, index) => (
                        <li key={index}>
                            <div className="list-item">
                                <div className="left-section">{text}</div>
                            </div>
                            <div className="right-section">
                                <input type="checkbox"
                                        name={text}
                                        value={value}
                                        checked={property_facilities[index]}
                                        onChange={()=>get_property_facilities(index)}>
                                </input>
                            </div>
                        </li>
                        )
                    )}
                </ul>
            </div>
            <div>
                <h4>Payment Option</h4>
                <ul className="prop-list">
                    {payment_option_option.map(({value, text}, index) => (
                        <li key={index}>
                            <div className="list-item">
                                <div className="left-section">{text}</div>
                            </div>
                            <div className="right-section">
                                <input type="checkbox"
                                        name={text}
                                        value={value}
                                        checked={payment_option[index]}
                                        onChange={()=>get_payment_option(index)}>
                                </input>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={add_new_hotel}>Add hotel</button>
        </div>
    )
}