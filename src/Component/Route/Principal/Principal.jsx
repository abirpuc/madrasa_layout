import React from 'react';
import AboutDirector from '../DirectorGeneral/AboutDirector';
import directorGeneral from '../../../assets/d_1.jpeg'
const Principal = () => {
    return (
        <div>
             <AboutDirector
                img= {directorGeneral}
                name = "মোঃ মহসিন"
                email = "techedu09@gmail.com"
                designation = "মহাপরিচালক (অতিরিক্ত সচিব)"
                office = "কারিগরি শিক্ষা অধিদপ্তর"
                mobile = "01234567897"
                phone_office = "মহাপরিচালক (অতিরিক্ত সচিব)"
                phone_home = "কারিগরি শিক্ষা অধিদপ্তর"
                fax = "techedu09@gmail.com"
            />
        </div>
    );
};

export default Principal;