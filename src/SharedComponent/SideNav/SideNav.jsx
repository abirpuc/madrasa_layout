import React from 'react';
import './sidenav.css'
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Visitor from '../../Component/Visitor/Visitor';
import PairTime from '../../Component/PairTime/PairTime';
import Wether from '../../Component/Wether/Wether';
const SideNav = () => {
    return (
        <div className='sideNav__container'>
          <Director/>
          <PairTime/>
          <ImportantLink/>
          <Anthem/>
          <Visitor/>
          <Wether/>
        </div>
    );
};

export default SideNav;