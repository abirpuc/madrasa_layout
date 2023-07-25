import React from 'react';
import './button.css'
const Button = (props) => {
    return (
    <button className='side-nav-btn'>{props.name}</button>
    );
};

export default Button;