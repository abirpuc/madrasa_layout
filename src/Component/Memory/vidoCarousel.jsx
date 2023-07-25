import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { videoData } from '../../Data/videoGallerydata';
import { Link } from 'react-router-dom';
const vidoCarousel = () => {
    return (
        <div className='owl_carousel'>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay
                nav
                dots
                loop
                margin={10}
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