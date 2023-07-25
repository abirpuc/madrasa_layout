import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../SharedComponent/Button/Button';
import './prayertime.css'

const PrayerTime = () => {
    const [salat, setSalat] = useState({})
    const Country= `Dhaka,Bangladesh`;
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('/').reverse().join('-');
    console.log(formattedDate)
    useEffect(() => {
        axios(`https://api.aladhan.com/v1/timingsByAddress/${formattedDate}?address=${Country}&method=8&tune=2,3,4,5,2,3,4,5,-3`)
            .then((res) => {
                setSalat(res.data.data.timings)
            })
    },[])
    return (
        <div>
            <Button
                name="নামাজের সময় সূচি "
            />
            <div className="salat__time-container">
                <p className='salat__name'>ফজর</p>
                <p className='salat__time'>{salat.Fajr}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>জোহর</p>
                <p className='salat__time'>{salat.Dhuhr}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>আসার</p>
                <p className='salat__time'>{salat.Asr}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>মাগরিব</p>
                <p className='salat__time'>{salat.Maghrib}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>ঈশা</p>
                <p className='salat__time'>{salat.Isha}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>সূর্য উদয়</p>
                <p className='salat__time'>{salat.Sunrise}</p>
            </div>
            <div className="salat__time-container">
                <p className='salat__name'>সূর্য অস্ত </p>
                <p className='salat__time'>{salat.Sunset}</p>
            </div>
           
        </div>
    );
};

export default PrayerTime;