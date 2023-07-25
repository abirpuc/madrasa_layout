import React from 'react';
import { Link } from 'react-router-dom';
import { photoGallery } from '../../Data/photoGalleryData';
const Gallery = () => {
    return (
            <div className="gallery">
                {
                    photoGallery.map((item) =>
                        <div className="gallery-card" key={item.id}>
                            <img src={item.img} alt="" />
                            <h2><Link to={item.link} className='gallery-link' title={item.title}>{item.galleryName}</Link></h2>
                            <p>22-01-22</p>
                        </div>
                    )
                }
            </div>
    );
};

export default Gallery;