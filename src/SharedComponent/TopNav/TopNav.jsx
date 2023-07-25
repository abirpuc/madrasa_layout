import React, { useState } from 'react';
import topnavcss from './topnav.module.css'
import { Link } from 'react-router-dom';
// import { BanglaDatePicker } from 'bangla-date-picker';
// import 'bangla-date-picker/dist/react-bangla-date-picker.min.css';
const TopNav = () => {
    const [toggle, setToggle] = useState(true)
    const [date, setDate] = useState(new Date());
    const handleToggle = (toggle) => {
        setToggle(toggle)
    }
    const engDate = date.toDateString().split(" ")

    const displayArabicDate = () => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const arabicDate = date.toLocaleDateString('ar', options);

        // Display the formatted date on the web page
        const dateContainer = document.getElementById('dateContainer');
        dateContainer.textContent = arabicDate;
    }




    window.onload = displayArabicDate;
      
    return (
        <div>
            <nav className={topnavcss.top_nav}>
                <ul>
                    <li><button>{engDate[2]} {engDate[1]} {engDate[3]}</button></li>
                    <li><button id="dateContainer"></button></li>
                    {/* <li><button id="banglaDate"><BanglaDate/></button></li> */}
                    {/* <li onClick={() => handleToggle(true)}><button className={toggle ? topnavcss.active : ''}>Bangli</button></li>
                    <li onClick={() => handleToggle(false)}><button className={toggle ? ' ' : topnavcss.active}>English</button></li> */}
                </ul>
                <div className={topnavcss.social__media_container}>
                    <Link> <i className="fa-brands fa-facebook"></i> </Link>
                    <Link> <i className="fa-brands fa-instagram"></i> </Link>
                    <Link> <i className="fa-brands fa-twitter"></i> </Link>
                    <Link> <i className="fa-brands fa-linkedin"></i> </Link>
                    <Link> <i className="fa-brands fa-youtube"></i> </Link>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;