import React, { useState } from 'react';
import './banner.css'
import { carouselimg } from '../../Data/carousel';
import Carousel from './Carousel';
const Banner = () => {
    const [current, setCurrent] = useState(0)

    const prev = () =>{
        setCurrent((current) => (current === 0 ? carouselimg.length - 1 : current - 1 )) 
    }
    const next = () =>{
        setCurrent((current) => (current ===  carouselimg.length - 1 ? 0 : current + 1) ) 
    }

    return (
        <div className='carousel-container'>
           <div className='carousel-img'>
            <Carousel img={carouselimg} current={current}/>
           </div>
            <div className='button'>
                <button onClick={prev}><p className='banner__btn'>&lt;</p></button>
                <button onClick={next}><p className='banner__btn'>&gt;</p></button>
            </div>
        </div>
    );
};

export default Banner;