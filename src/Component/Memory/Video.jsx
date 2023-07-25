import React from 'react';
import { Link } from 'react-router-dom';
import { videoData } from '../../Data/videoGallerydata';
const Video = () => {
    return (
        <div className="gallery">
            {
                videoData.map(videoItem =>
                    videoData.length>2?videoData.splice(0,2):
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

export default Video;