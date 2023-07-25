import React from 'react';
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Helpline from '../../Component/Helpline/Helpline';
import Visitor from '../../Component/Visitor/Visitor';
import Wether from '../../Component/Wether/Wether';
import PrayerTime from '../../Component/PrayerTime/PrayerTime';

const SideNavHome = () => {
    return (
        <div>
            <Director />
            <PrayerTime/>
            <ImportantLink />
            <Anthem />
            <Visitor/>
            <Helpline />
            <Wether/>
        </div>
    );
};

export default SideNavHome;