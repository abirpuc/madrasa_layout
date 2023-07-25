import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { videoData } from '../../Data/videoGallerydata';
import { Link } from 'react-router-dom';
const vidoCarousel = () => {

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
                    videoData.map(videoItem =>
                        videoData.length > 2 ? videoData.splice(0, 2) :
                    <div className="gallery-card-video" key={videoItem.id}>
                        <iframe className='gallery-card-video' src={videoItem.videoLink}>
                        </iframe>
                        <h2><Link to={videoItem.link} className='gallery-link' title={videoItem.title}>{videoItem.galleryName}</Link></h2>
                    </div>
                    )
                }

            </OwlCarousel>
        </div>
    );
};

export default vidoCarousel;