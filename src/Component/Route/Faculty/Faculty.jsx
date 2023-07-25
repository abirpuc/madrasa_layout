import React from 'react';
import { teachers } from '../../../Data/teachersData';
import FacultyData from './FacultyData';
import './faculty.css'
const Faculty = () => {
    return (
        <div>
            <h3>আমাদের শিক্ষকমন্ডলী</h3>
            <table>
                {
                    teachers.map(teacher => <FacultyData key={teacher.id} teacher={teacher}/>)
                }
            </table>
        </div>
    );
};

export default Faculty;