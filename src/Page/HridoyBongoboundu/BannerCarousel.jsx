import React from 'react';

const BannerCarousel = (props) => {
    const currentIdx = props.current
    const img = props.img[currentIdx].img;
    return (
        <img className={props.csl} src={img} alt="" width={920} height={400}/>
    );
};

export default BannerCarousel;