import React from 'react';
import Video from '../../../Memory/Video';
import { videoData } from '../../../../Data/videoGallerydata';
import { Link } from 'react-router-dom';
const VideoGallery = () => {
    return (
        <div className='gallery'>
            {
                videoData.map((videoItem) =>
                    <div className="gallery-card" key={videoItem.id}>
                        <iframe src={videoItem.videoLink}>
                        </iframe>
                        <h2><Link to={videoItem.link} className='gallery-link' title={videoItem.title}>{videoItem.galleryName}</Link></h2>
                    </div>
                )
            }
        </div>
    );
};

export default VideoGallery;