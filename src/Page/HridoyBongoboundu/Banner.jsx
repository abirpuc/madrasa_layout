import React, { useState } from 'react';
import { bongobonduBanner } from '../../Data/bongobonduBanner'
import BannerCarousel from './BannerCarousel';
const Banner = () => {

    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((current) => (current === 0 ? bongobonduBanner.length - 1 : current - 1))
    }
    const next = () => {
        setCurrent((current) => (current === bongobonduBanner.length - 1 ? 0 : current + 1))
    }

    return (
        <div className='carousel__container'>
            <div className='carousel__img'>
                <BannerCarousel 
                cls = "bannerImg"
                img={bongobonduBanner} 
                current={current} />
            </div>
            <div className='button__container'>
                <button onClick={prev}><p className='banner__btn'>&lt;</p></button>
                <button onClick={next}><p className='banner__btn'>&gt;</p></button>
            </div>
        </div>
    );
};

export default Banner;