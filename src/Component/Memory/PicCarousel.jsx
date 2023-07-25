import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { photoGallery } from '../../Data/photoGalleryData';
import { Link } from 'react-router-dom';

const PicCarousel = () => {

    const options = {
        loop:true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1,
            },
            400:{
                items: 1,
            },
            700:{
                items: 3,
            },
            1000:{
                items: 3,
            }
        } 
    }


    return (
        <div className='owl_carousel'>
            <OwlCarousel
            className = "slider-items owl-carousel"
            {...options}
        >
            {
                    photoGallery.map((item) =>
                        <div className="picture__gallery" key={item.id}>
                            <img src={item.img} alt="" />
                            <h2><Link to={item.link} className='gallery-link' title={item.title}>{item.galleryName}</Link></h2>
                            <p>22-01-22</p>
                        </div>
                    )
                }
        </OwlCarousel>
        </div>
    );
};

export default PicCarousel;