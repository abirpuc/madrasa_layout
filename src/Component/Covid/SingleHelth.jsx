import React from 'react';
import Button from '../../SharedComponent/Button/Button';
import { Link } from 'react-router-dom';

const SingleHelth = (props) => {
    
    return (
        <div>
            <Button name={props.btnName} />
            <Link target='_blank' rel='noopener noreferrer' to={`${props.link}`}><img src={props.img} alt="" /></Link>
        </div>
    );
};

export default SingleHelth;