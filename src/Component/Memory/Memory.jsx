import React from 'react';
import './memory.css';
// import Gallery from './Gallery';
import Video from './Video';
import PicCarousel from './PicCarousel';
import VidoCarousel from './vidoCarousel'
const Memory = () => {
    return (
        <div className='memory-container'>
            <div className="gallery-container">
            <button className='gallery-btn'>ছবি গ্যালারী</button>
            {/* <Gallery/> */}
            <PicCarousel/>
            </div>
            <div className="video-container">
            <button className='gallery-btn'>ভিডিও গ্যালারী</button>
            {/* <Video/> */}
            <VidoCarousel/>
            </div>
        </div>
    );
};

export default Memory;