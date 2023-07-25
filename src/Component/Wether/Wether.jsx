import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../SharedComponent/Button/Button';
import './weather.css'

const Wether = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [location, setLocation] = useState({})
    const [temperature, setTemperature] = useState()
    const [weather, setWeather] = useState()

    const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
    const API_Key = `b379580bb7eb8bb0e35e63e2ef09e4ff`

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
        const API = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric`;
        axios.get(API)
            .then((Response) => {
                setLocation(Response.data)
                setTemperature(Response.data.main.temp)
                setWeather(Response.data.weather[0].main)
            })
    }, [latitude, longitude])

    return (
        <div>
            <Button
                name="ওয়েদার"
            />
            <div className='weather__container'>
                {
                    location.name? <>
                        <p className='location'>{location.name}</p>
                        <p className='location'>{temperature}°C</p>
                        <p className='location'>{weather}</p>
                    </> :
                    <p>No Data please reloade....</p>
                }
            </div>
        </div>
    );
};

export default Wether;