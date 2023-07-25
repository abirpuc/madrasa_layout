import React from 'react';

const FacultyData = ({teacher}) => {
    const {id,name,email,designation,education_qualification,mobile,img} = teacher;
    return (
        <tr className='our-faculty-info'>
        <td>{id}</td>
        <td className='table__img'>
            <img src={img} alt={name} width={150} height={150}/>
        </td>
       <td >
        <tr>
            <td>নাম</td>
            <td>{name}</td>
        </tr>
        <tr>
            <td>পদবি</td>
            <td>{designation}</td>
        </tr>
        <tr>
            <td>শিক্ষাগত যোগ্যতা</td>
            <td>{education_qualification}</td>
        </tr>
        <tr>
            <td>মোবাইল</td>
            <td>{mobile}</td>
        </tr>
        <tr>
            <td>ইমেইল</td>
            <td>{email}</td>
        </tr>
       </td>
    </tr>
    );
};

export default FacultyData;