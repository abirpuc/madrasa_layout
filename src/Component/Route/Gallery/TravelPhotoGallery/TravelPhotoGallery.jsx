import React from 'react';
import { travelPhoto } from '../../../../Data/travlephoto'
import Photos from '../Photos/Photos';
const TravelPhotoGallery = () => {
    return (
        <div>
           <Photos
                photo = {travelPhoto}
            />
        </div>
    );
};

export default TravelPhotoGallery;