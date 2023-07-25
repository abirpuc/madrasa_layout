import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({item}) => {
    // console.log(item)
    return (
        <div>
            <Link className='nav-item' to={item.to}>
                {item.name}
                <div className='hover-items-container'>
                    <div className="hover-items">
                    {
                        item.hoverItem.map((hitem,idx) => <Link className='hover-nav-item' key={idx} >{hitem.name}</Link>)
                    }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavItem;