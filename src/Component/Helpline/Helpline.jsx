import React from 'react';
import Visitor from '../Visitor/Visitor';
import HotLine from '../HotLine/HotLine';
import Covid from '../Covid/Covid';

const Helpline = () => {
    return (
        <div>
          <HotLine/>
          <Covid/>
        </div>
    );
};

export default Helpline;