import React, { useState } from 'react';
import TopBanner from '../../../SharedComponent/TopBanner/TopBanner';
import NavBar from '../../../SharedComponent/NavBar/NavBar';
import Footer from '../../../SharedComponent/Footer/Footer'
import BottomImg from '../../../SharedComponent/BottomImg/BottomImg';
import { facultyMember } from '../../../Data/facultyMemberData';
import './sscvoationl.css'
import { Link, Outlet } from 'react-router-dom';
import FacultyMember from './FacultyMember';
const SscVocational = () => {
    const [overview, setOverview] = useState(true);
    const [Activities, setActivities] = useState(false);
    const [Facilities, setFacilities] = useState(false);

    const overviewf = (t) =>{
        setOverview(t)
        setActivities(false)
        setFacilities(false)
    }
    const activitiesf = (t) =>{
        setOverview(false)
        setActivities(t)
        setFacilities(false)
    }
    const facilitiesf = (t) =>{
        setOverview(false)
        setActivities(false)
        setFacilities(t)
    }
    return (
        <div>
            <TopBanner/>
            <NavBar/>
            <div className='course-content-container'>
                <div className='overview-container'>
                    <div className='overview-link-item'>
                        <Link className={overview?` active`:''}  onClick={()=> overviewf(true)}> Overview </Link>
                        <Link className={Activities?` active`:''}  onClick={()=> activitiesf(true)}> Activities</Link>
                        <Link className={Facilities?` active`:''}  onClick={()=>facilitiesf(true)}> Facilities</Link>
                    </div>
                    <div className='content'>
                        {/* <Outlet></Outlet> */}
                        {
                            overview ?    <p>In view of the above highest number of students are placed the merit position in the job market such as the public service commission & private sector for a couple of years. For more interactions among the students, the department has introduced a well-furnished seminar room with the latest edition reference books and syllabus-related foreign books to mitigate the student’s demands. In addition is not lacking behind in the context of co-curriculum and extra curriculum activities like inter Departmental football competitions, Debate competition Fresher Reception, and Cultural programs. The Department has s strong Alumni named ”Accounting Alumni” and so on</p> 
                            : Activities ? <p>In view of the above highest number of students are placed the merit position in the job market such as the public service commission & private sector for a couple of years. For more interactions among the students, the department has introduced a well-furnished seminar room with the latest edition reference books and syllabus-related foreign books to mitigate the student’s demands. In addition is not lacking behind in the context of co-curriculum and extra curriculum activities like inter Departmental football competitions, Debate competition Fresher Reception, and Cultural programs. The Department has s strong Alumni named ”Accounting Alumni” and so on</p> 
                            : Facilities ?    <p>In view of the above highest number of students are placed the merit position in the job market such as the public service commission & private sector for a couple of years. For more interactions among the students, the department has introduced a well-furnished seminar room with the latest edition reference books and syllabus-related foreign books to mitigate the student’s demands. In addition is not lacking behind in the context of co-curriculum and extra curriculum activities like inter Departmental football competitions, Debate competition Fresher Reception, and Cultural programs. The Department has s strong Alumni named ”Accounting Alumni” and so on</p> : ' '
                        }
                    </div>
                </div>
                    <div className='faculty-member-container'>
                        <h3 className='faculty__title'>Faculty Member</h3>
                        <div className='faculty__member__card__container'>
                            {
                                facultyMember.map(faculty => <FacultyMember key={faculty.id} faculty={faculty}></FacultyMember>)
                            }
                        </div>
                    </div>
            </div>
            <BottomImg/>
            <Footer/>
        </div>
    );
};

export default SscVocational;