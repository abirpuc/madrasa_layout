import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import img1 from '../../assets/travelphoto/travel1.jpg'
import img2 from '../../assets/travelphoto/travel-2.jpg'
import img3 from '../../assets/travelphoto/travel-3.jpg'
import { photoGallery } from '../../Data/photoGalleryData';
import { Link } from 'react-router-dom';

const PicCarousel = () => {

    // className="owl-theme"
    //         items = "3"
    //         autoplay
    //         nav
    //         dots
    //         loop
    //         margin={10}

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
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
                items: 5,
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
                        <div className="" key={item.id}>
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