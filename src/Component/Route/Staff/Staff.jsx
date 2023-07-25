import React from 'react';
import { teachers } from '../../../Data/teachersData';
import FacultyData from '../Faculty/FacultyData';

const Staff = () => {
    return (
        <div>
            <h3>আমাদের কর্মীরা</h3>
            <table>
                {
                    teachers.map(teacher => <FacultyData key={teacher.id} teacher={teacher}/>)
                }
            </table>
        </div>
    );
};

export default Staff;