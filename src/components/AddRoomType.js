import Axios from "axios";
import { useEffect, useState } from "react";
import './AddRoomType.css'

export const AddRoomType = () => {
    const hotel_option = [
        {value: '', text: "Hotel Option"},
        {value: 0, text: "Hottestel" },
        {value: 1, text: 'coldbutHot'},
        {value: 2, text: 'Hot1testel'},
    ]

    const [price, setPrice] = useState(0)
    const get_price = (e) => {
        setPrice(e.target.value)
        console.log(price)
    }

    const [sleeps, setSleeps] = useState(0)
    const get_sleeps = (e) => {
        setSleeps(e.target.value)
        console.log(sleeps)
    }

    const room_size_option = [
        {value: '', text: "Room size Option"},
        {value: '300 square feet', text: "300 square feet" },
    ]
    const [room_size, setRoomSize] = useState(room_size_option[0].value)
    const get_roomsize = (e) => {
        setRoomSize(e.target.value)
        console.log(e.target.value)
    }

    const bed_option = [
        {value: '', text: "Bed Option"},
        {value: 'KingSize', text: "KingSize" },
        {value: '3.5 feet', text: "3.5 feet" },
    ]
    const [bed, setBed] = useState(bed_option[0].value)
    const get_bed = (e) => {
        setBed(e.target.value)
        console.log(e.target.value)
    }

    const roomtype_option = [
        {value: '', text: "Room type Option"},
        {value: 'Standard', text: "Standard" },
        {value: 'Premium', text: "Premium" },
        {value: 'Deluxe', text: "Deluxe" },
    ]
    const [roomtype, setRoomtype] = useState(roomtype_option[0].value)
    const get_roomtype = (e) => {
        setRoomtype(e.target.value)
        console.log(e.target.value)
    }
    const add_roomtype = () => {
        let roomtype_info = {
            "hotel_name": hotel_name,
            "price": price,
            "sleeps": sleeps,
            "room_size": room_size,
            "bed": bed,
            "roomtype": roomtype
        }
        console.log(555);
        Axios.post("http://127.0.0.1:8000/add_roomtype/", roomtype_info).then((res) => {
            console.log(res.data);
        })
    }

    const hotel_option_room = [
        {value: '', text: "Hotel Option"},
        {value: 0, text: "Hottestel" },
        {value: 1, text: 'coldbutHot'},
        {value: 2, text: 'Hot1testel'},
    ]
    const [hotel_name, setHotelName] = useState(hotel_option_room[0].value)
    const get_hotel_room = (e) => {
        setHotelName(e.target.value)
        console.log(hotel_name)
    }

    const room_type_room_option = [
        {value: '', text: "Room type Option"},
        {value: 'Standard', text: "Standard" },
        {value: 'Premium', text: "Premium" },
        {value: 'Deluxe', text: "Deluxe" },
    ]
    const [room_type_room, setRoomTypeRoom] = useState(room_type_room_option[0].value)
    const get_roomtype_room = (e) => {
        setRoomTypeRoom(e.target.value)
        console.log(e.target.value)
    }
    const [room_amount, setRoomAmount] = useState(0)
    const get_room_amount = (e) => {
        setRoomAmount(e.target.value)
        console.log(room_amount)
    }

    const add_room = () => {
        let room_info = {
            "hotel_name": hotel_name,
            "room_type": room_type_room,
            "room_amount": room_amount,
        }
        console.log(room_info);
        Axios.post("http://127.0.0.1:8000/add_room/", room_info).then((res) => {
            console.log(res.data);
        })
    }
        

    return (
        <div>
            <div id="roomtype">
                <div><h2>Add room type</h2></div>
            <div id="roomtype_header">
                <div>Hotel Selection</div>
                <select value={hotel_name} onChange={get_hotel_room}>
                    {hotel_option.map(hotel_option => (
                        <option key={hotel_option.value} value={hotel_option.value}>
                            {hotel_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div id="roomtype_header">
                <div>price</div>
                <div><input type="number" className="" id="text_box" onChange={get_price}></input></div>
            </div>
            <div id="roomtype_header">
                <div>sleeps</div>
                <div><input type="number" className="" id="text_box" onChange={get_sleeps}></input></div>
            </div>
            <div id="roomtype_header">
                <div>Room size</div>
                <select value={room_size} onChange={get_roomsize}>
                    {room_size_option.map(room_size_option => (
                        <option key={room_size_option.value} value={room_size_option.value}>
                            {room_size_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div id="roomtype_header">
                <div>Bed</div>
                <select value={bed} onChange={get_bed}>
                    {bed_option.map(bed_option => (
                        <option key={bed_option.value} value={bed_option.value}>
                            {bed_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div id="roomtype_header">
                <div>Room type</div>
                <select value={roomtype} onChange={get_roomtype}>
                    {roomtype_option.map(roomtype_option => (
                        <option key={roomtype_option.value} value={roomtype_option.value}>
                            {roomtype_option.text}
                        </option>
                    ))}
                </select>
            </div>
            <div id="roomtype_header">
                <button onChange={add_roomtype}> Add room type </button>
            </div>

            </div>
            <div id="room">
                <div><h2>Add Room</h2></div>
                <div><h4>Hotel Selection</h4>
                <select value={hotel_name} onChange={get_hotel_room}>
                    {hotel_option_room.map(hotel_option_room => (
                        <option key={hotel_option_room.value} value={hotel_option_room.value}>
                            {hotel_option_room.text}
                        </option>
                    ))}
                </select>
                </div>
                <div>
                    <div><h4>Room type</h4></div>
                    <div>
                        <select value={room_type_room} onChange={get_roomtype_room}>
                            {room_type_room_option.map(room_type_room_option => (
                                <option key={room_type_room_option.value} value={room_type_room_option.value}>
                                    {room_type_room_option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <div><h4>Room Amount</h4></div>
                    <div><input type="number" id="text_box" onChange={get_room_amount}></input></div>
                </div>
                <div>
                    <button onChange={add_room}> Add room</button>
                </div>
            </div>
            
        </div>
    )
}