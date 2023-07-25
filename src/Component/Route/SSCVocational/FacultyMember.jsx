import React from 'react';
import { Link } from 'react-router-dom';

const FacultyMember = ({ faculty }) => {
    const { id, name, email, designation, mobile, staff_img } = faculty
    return (
        <div className='member__card'>
            <div className='faculty-img'>
                <img src={staff_img} alt={name}/>
            </div>
            <div className="faculty-member-data">
                <p className='name'>{name}</p>
                <p>{designation}</p>
                <p className='email'>{email}</p>
                <p>{mobile}</p>
                <Link className='details-btn' to={`/single-staff/${id}`}><button>View Details</button></Link>
            </div>
        </div>
    );
};

export default FacultyMember;