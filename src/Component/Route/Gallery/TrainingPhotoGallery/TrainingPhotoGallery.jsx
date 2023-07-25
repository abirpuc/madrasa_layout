import React from 'react';
import { trainPhoto } from '../../../../Data/trainphoto'
import Photos from '../Photos/Photos';
const TrainingPhotoGallery = () => {
    return (
        <div className='photo-container'>
            <Photos
                photo = {trainPhoto}
            />
          
        </div>
    );
};

export default TrainingPhotoGallery;