import React from 'react';
import './sidenav.css'
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Visitor from '../../Component/Visitor/Visitor';
import Wether from '../../Component/Wether/Wether';
import PrayerTime from '../../Component/PrayerTime/PrayerTime';
const SideNav = () => {
    return (
        <div className='sideNav__container'>
          <Director/>
          <PrayerTime/>
          <ImportantLink/>
          <Anthem/>
          <Visitor/>
          <Wether/>
        </div>
    );
};

export default SideNav;