import React from 'react';
import Button from '../../SharedComponent/Button/Button';
import SingleHelth from './SingleHelth';
import covid from '../../assets/Corona-Teaser-BD-card-.jpg'
import covid2 from '../../assets/corona.jpg';
import dengu from '../../assets/dengu.jpg';
import './covid.css'
const Covid = () => {
    
    return (
        <div className='health-container'>
            <div className="single-health">
                <SingleHelth
                    btnName = "করোনা ভাইরাস প্রতিরোধে যোগাযোগ"
                    img = {covid2}
                    link = "https://corona.gov.bd/"
                />
                <SingleHelth
                    btnName = "ডেঙ্গু প্রতিরোধে করণীয়ি"
                    img = {dengu}
                    link = "https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c"
                />
            </div>
        </div>
    );
};

export default Covid;