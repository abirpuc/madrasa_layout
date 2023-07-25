import React from 'react';
import './importantlink.css';
import Button from '../../SharedComponent/Button/Button';
import {links} from '../../Data/Importantlink'
import { Link } from 'react-router-dom';
const ImportantLink = () => {
    return (
        <div className='important-link-container'>
            <Button name="গুরুত্বপূর্ণ লিঙ্ক"/>
            <div className='important-link'>
               { links.map((item,idx) => <Link key={idx} target='_blank' to={item.to}><i className="fa-solid fa-play icon"></i>{item.name}</Link>)}
            </div>
        </div>
    );
};

export default ImportantLink;