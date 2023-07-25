import React from 'react';
import './map.css'
const Map = () => {
    return (
        <div className='map'>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=nagoli kamil madrasa&t=&z=10&ie=UTF8&iwloc=&output=embed" >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;