import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { facultyMember } from '../../../Data/facultyMemberData';
import TopBanner from '../../../SharedComponent/TopBanner/TopBanner';
import NavBar from '../../../SharedComponent/NavBar/NavBar';
import BottomImg from '../../../SharedComponent/BottomImg/BottomImg';
import Footer from '../../../SharedComponent/Footer/Footer';

const SingleStaff = () => {
    const data = useLoaderData();
    const id = parseInt(data.id);
    return (
        <div>
            <TopBanner/>
            <NavBar/>
            <div className="single-member-section">
            {
                facultyMember.map(member => (member.id === id)? 
                    <div key={member.id} className='single-member-container'>
                        <div className="single-member-img">
                        <img src={member.staff_img} alt="" />
                        </div>
                        <div className='single-member-info-container'>
                            <p>নামঃ {member.name}</p>
                            <p>পদবীঃ {member.designation}</p>
                            <p>সেকশনঃ {member.section}</p>
                            <p>শিক্ষাগত যোগ্যতাঃ {member.education_qualification}</p>
                            <p>লিঙ্গঃ {member.gander}</p>
                            <p>বাবার নামঃ {member.father_name}</p>
                            <p>মায়ের নামঃ {member.mother_name}</p>
                            <p>ইমেইলঃ {member.email}</p>
                            <p>মোবাইলঃ {member.mobile}</p>
                            <p>স্টাফ অবস্থাঃ {member.staff_position}</p>
                        </div>
                    </div>
                : '')
            }
            </div>
             <BottomImg/>
            <Footer/>
        </div>
    );
};

export default SingleStaff;