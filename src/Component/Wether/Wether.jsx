import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_Key, API_endpoint } from '../../../API/Wether';
import Button from '../../SharedComponent/Button/Button';


const Wether = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [location, setLocation] = ('')

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
        const API = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_Key}`;
        axios.get(API)
        .then((Response) =>{
            // setLocation(Response.data.name)
            console.log(Response.data.name)
        })
    },[latitude,longitude])
    console.log(location)
    return (
        <div>
            <Button
                name="ওয়েদার"
            />
            <div>
                <p>location:{location}</p>
            </div>
        </div>
    );
};

export default Wether;