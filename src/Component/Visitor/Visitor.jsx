import React, { useState } from 'react';
import './vistor.css'
import Button from '../../SharedComponent/Button/Button';
const Visitor = () => {
    const [today, setToday] = useState(2)
    const [yesterday, setYesterday] = useState(6)
    const [last7, setLast7] = useState(11)
    return (
        <div className='visitor-container'>
            <Button name="আমাদের ভিজিটরস"/>
            <h3>000048</h3>
            <div className='user-container'>
                <p>User Today: {today}</p>
                <p>User Yesterday: {yesterday}</p>
                <p>User Last 7 days: {last7}</p>
            </div>
        </div>
    );
};

export default Visitor;