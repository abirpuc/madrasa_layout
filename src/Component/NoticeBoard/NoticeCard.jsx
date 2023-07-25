import React from 'react';
import { Link } from 'react-router-dom';

const NoticeCard = (props) => {
    return (
        <div className={props.clsName}>
            <img src={props.img} alt=""  width={300} height={200}/>
            <Link to={props.link}><button className={props.btnCls}>{props.button}</button></Link>
        </div> 
    );
};

export default NoticeCard;