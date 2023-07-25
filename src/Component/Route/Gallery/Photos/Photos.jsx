import React from 'react';
import './photo.css'
const Photos = ({photo}) => {
    return (
        <div className='photo-container'>
            <div className="photos">
            {
                photo.map((img, inx) => <img key={inx} src={img.img} alt="photo"/>)
            }
            </div>
        </div>
    );
};

export default Photos;