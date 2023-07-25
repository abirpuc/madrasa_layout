import React from 'react';
import './hotline.css';
import Button from '../../SharedComponent/Button/Button';
import hotline from '../../assets/hotline.jpeg'
const HotLine = () => {
    return (
        <div className='hotline-container'>
            <Button name="জরুরী হটলাইন"/>
            <img src={hotline} alt="" />
        </div>
    );
};

export default HotLine;