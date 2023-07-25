import React from 'react';
import './banner.css'
const Carousel = (props) => {
    const currentIdx = props.current
    const img = props.img[currentIdx].img;
    return (
            <img className='' src={img} alt="" width={600} height={350}/>
    );
};

export default Carousel;