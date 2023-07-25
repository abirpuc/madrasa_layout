import React, { useState } from 'react';
import './navbar.css'
import { NavItems } from '../../Data/Navbar';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [toggle, setToggle] = useState(true)
    const handleMenu = (t) => {
        setToggle(t)
    }
    const [cToggle, setCToggle] = useState(true)
    const [vToggle, setVToggle] = useState(true)
    const [coToggle, setcoToggle] = useState(true)
    const [manToggle, setmanToggle] = useState(true)
    const [acaToggle, setacaToggle] = useState(true)
    const [stdToggle, setstdToggle] = useState(true)
    const [resToggle, setresToggle] = useState(true)
    const [recToggle, setrecToggle] = useState(true)
    const [gallToggle, setgallToggle] = useState(true)

    const handCampus = (t) => {
        setCToggle(t)
        setVToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }

    const handVorti = (t) => {
        setVToggle(t)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }
    const handCourse = (t) => {
        setacaToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }
    const handManagement = (t) => {
        setmanToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }
    const handAcademy = (t) => {
        setacaToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }

    const handStudent = (t) => {
        setstdToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setresToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }
    const handResult = (t) => {
        setresToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setrecToggle(true)
        setgallToggle(true)
    }
    const handResource = (t) => {
        setrecToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setgallToggle(true)
    }
    const handGallery = (t) => {
        setgallToggle(t)
        setVToggle(true)
        setCToggle(true)
        setcoToggle(true)
        setmanToggle(true)
        setacaToggle(true)
        setstdToggle(true)
        setresToggle(true)
        setrecToggle(true)
    }

    return (
        <>
            <div className='nav-bar-container'>
                <div className='mobile-view' onClick={() => handleMenu(!toggle)}><i className="fa-solid fa-bars"></i></div>
                <div className='nav-bar'>
                    <Link className='nav-item home' to="/"><i className="fa-sharp fa-solid fa-house-chimney"></i></Link>
                    <Link className='nav-item nav-item-campus' to="/">আমাদের সম্পর্কে
                        <div className='hover-items-container dropdown-campus'>
                            <div className="hover-items">
                                {/* <Link to="/collage" className='hover-item'>আমাদের সম্পর্কে</Link> */}
                                <Link to="/history" className='hover-item'>ইতিহাস</Link>
                                <Link to="/academic-infrastructure" className='hover-item'>প্রাতিষ্ঠানিক অবকাঠামো</Link>
                                <Link to="/information-of-purity" className='hover-item'>বিধি ও প্রবিধান</Link>
                            </div>
                        </div>
                    </Link>
                    {/* <Link className='nav-item vorthi' onClick={() => handVorti(!vToggle)}>ভর্তি
                        <div className='hover-items-container dropdown-vorthi'>
                            <div className="hover-items">
                                <Link className='hover-item' to="/application-process">আবেদন প্রক্রিয়া</Link>
                                <Link className='hover-item' to="/admission-test">ভর্তি পরীক্ষা</Link>
                                <Link className='hover-item' to="/admission-rule">ভর্তি নীতি</Link>
                                <Link className='hover-item' to="/registration-system">রেজিস্ট্রেশন সিস্টেম</Link>
                                <Link className='hover-item' to="/current-education">বর্তমান শিক্ষা ব্যবস্থা</Link>
                                <Link className='hover-item' to="/annual-plane">বাৎসরিক পরিকল্পনা</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item course' >কোর্সসমূহ
                        <div className='hover-items-container dropdown-course'>
                            <div className="hover-items">
                                <Link className='hover-item' to="/ssc-vocational">এসএসসি (ভোকেশনাল)</Link>
                                <Link className='hover-item' to="/hsc-vocational">এইচএসসি (ভোকেশনাল)</Link>
                                <Link className='hover-item'>বেসিক কোর্স</Link>
                            </div>
                        </div>
                    </Link> */}
                    <Link className='nav-item management' >ব্যবস্থাপনা
                        <div className='hover-items-container dropdown-management'>
                            <div className="hover-items">

                                <Link className='hover-item' to="/director-general">অধ্যক্ষ</Link>
                                <Link className='hover-item' to="/director-vocational">উপাধ্যক্ষ</Link>
                                {/* <Link className='hover-item' to="/principal">অধ্যক্ষ</Link> */}
                                <Link className='hover-item' to='/faculty-member'>পরিচালনা কমিটি</Link>
                                <Link className='hover-item' to='/faculty-member'>আমাদের শিক্ষকমন্ডলী</Link>
                                <Link className='hover-item' to='/faculty-member'>প্রাক্তন অধ্যক্ষ মহোদয়গণ</Link>
                                <Link className='hover-item' to="/staff">আমাদের কর্মীরা</Link>
                                <Link className='hover-item' to="/staff">সফল সাবেক শিক্ষার্থী</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item academy' >একাডেমীক তথ্য
                        <div className='hover-items-container dropdown-academy'>
                            <div className="hover-items">

                            <Link className='hover-item' to="/academic-syllabus" >শ্রেণী সময়সূচি</Link>
                            <Link className='hover-item' to="/exam-schedule" >পরীক্ষার সময়সূচি</Link>
                            <Link className='hover-item' to="/education-calendar" >সিলেবাস</Link>
                            <Link className='hover-item' to="/academic-prospectus" >প্রসপেক্টাস</Link>
                            <Link className='hover-item' to="/academic-prospectus" >শ্রেনী ভিত্তিক বিষয় সমূহ</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item student' >শিক্ষার্থী
                        <div className='hover-items-container dropdown-student'>
                            <div className="hover-items">

                                <Link className='hover-item' to="/student-salary">বেতন</Link>
                                <Link className='hover-item' to="/student-uniform">ইউনিফর্ম</Link>
                                <Link className='hover-item' to="/our-student">ছাত্রছাত্রীর তালিকা</Link>
                                <Link className='hover-item' to="/success-story">শিক্ষার্থীদের সাফল্যের গল্প</Link>
                                <Link className='hover-item' to="/innovative-project">উদ্ভাবনী প্রকল্প</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item result' >ফলাফল
                        <div className='hover-items-container dropdown-result'>
                            <div className="hover-items">
                                <Link className='hover-item' to="/board-result">অভ্যন্তরীন পরীক্ষার ফলাফল</Link>
                                <Link className='hover-item' to="/board-result">বোর্ড পরীক্ষার ফলাফল</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item resource' >রিসোর্স
                        <div className='hover-items-container dropdown-resource'>
                            <div className="hover-items">

                                <Link className='hover-item' to="/digital-classroom">ডিজিটাল ক্লাস কনটেন্ট</Link>
                                <Link className='hover-item' to="/library">গ্রন্থাগার</Link>
                                <Link className='hover-item' to="/computer-lab">কম্পিউটার ল্যাব</Link>
                                <Link className='hover-item' to="/play-ground">খেলার মাঠ</Link>
                                <Link className='hover-item' to="/co-curricular-activities">সহ-পাঠক্রম সংক্রান্ত কার্যক্রম</Link>
                                <Link className='hover-item' to="/co-curricular-activities">প্রকাশনা</Link>
                                <Link className='hover-item' to="/citizen-chart">সিটিজেন চার্টার</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item gallery-item' >গ্যালারী
                        <div className='hover-items-container dropdown-gallery-item'>
                            <div className="hover-items">

                                <Link className='hover-item' to="/photo-gallery">ফটো গ্যালারী</Link>
                                <Link className='hover-item' to="/video-gallery">ভিডিও গ্যালারী</Link>
                            </div>
                        </div>
                    </Link>
                    <Link className='nav-item communication' to="/communication">যোগাযোগ</Link>
                    <a target="_blank" rel="noopener noreferrer" className='nav-item payment' href="https://live.academyims.com/Student_Portal?fbclid=IwAR2QO6Ew_frUxmFQ8655ApCEZnZu6g9s6G7OPvuguNjP24P9MzaNHzq4YDE">ফি পেমেন্ট</a>
                </div>
            </div>
            <div className='mobile-nav-var-container'>
                <div className={!toggle ? 'nav-bar-mobile' : 'display'}>
                    <Link className='nav-item home' to="/" onClick={() => handleMenu(true)}><i className="fa-sharp fa-solid fa-house-chimney"></i></Link>
                    <Link className='nav-item nav-item-campus' onClick={() => handCampus(!cToggle)}>আমাদের সম্পর্কে
                    </Link>
                    <div className={cToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">
                            {/* <Link to="/collage" className='hover-item' onClick={() => handleMenu(true)}>আমাদের সম্পর্কে</Link> */}
                            <Link to="/history" className='hover-item' onClick={() => handleMenu(true)}>ইতিহাস</Link>
                            <Link to="/academic-infrastructure" className='hover-item' onClick={() => handleMenu(true)}>প্রাতিষ্ঠানিক অবকাঠামো</Link>
                            <Link to="/information-of-purity" className='hover-item' onClick={() => handleMenu(true)}>বিধি ও প্রবিধান</Link>
                        </div>
                    </div>
                
                    <Link className='nav-item management' onClick={() => handManagement(!manToggle)}>ব্যবস্থাপনা  </Link> 
                        <div className={manToggle ? 'display' : 'hover-item-mobile-view'}>
                            <div className="hover-items">

                                <Link className='hover-item' to="/director-general" onClick={() => handleMenu(true)}>অধ্যক্ষ</Link>
                                <Link className='hover-item' to="/director-vocational" onClick={() => handleMenu(true)}>উপাধ্যক্ষ</Link>
                                {/* <Link className='hover-item' to="/principal" onClick={() => handleMenu(true)}>অধ্যক্ষ</Link> */}
                                <Link className='hover-item' to='/faculty-member' onClick={() => handleMenu(true)}>পরিচালনা কমিটি</Link>
                                <Link className='hover-item' to='/faculty-member' onClick={() => handleMenu(true)}>আমাদের শিক্ষকমন্ডলী</Link>
                                <Link className='hover-item' to='/faculty-member' onClick={() => handleMenu(true)}>প্রাক্তন অধ্যক্ষ মহোদয়গণ</Link>
                                <Link className='hover-item' to="/staff" onClick={() => handleMenu(true)}>আমাদের কর্মীরা</Link>
                                <Link className='hover-item' to="/staff" onClick={() => handleMenu(true)}>সফল সাবেক শিক্ষার্থী</Link>
                            </div>
                        </div>
                    <Link className='nav-item academy' onClick={() => handAcademy(!acaToggle)}>একাডেমীক তথ্য
                    </Link>
                    <div className={acaToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">

                            <Link className='hover-item' to="/academic-syllabus" onClick={() => handleMenu(true)}>শ্রেণী সময়সূচি</Link>
                            <Link className='hover-item' to="/exam-schedule" onClick={() => handleMenu(true)}>পরীক্ষার সময়সূচি</Link>
                            <Link className='hover-item' to="/education-calendar" onClick={() => handleMenu(true)}>সিলেবাস</Link>
                            <Link className='hover-item' to="/academic-prospectus" onClick={() => handleMenu(true)}>প্রসপেক্টাস</Link>
                            <Link className='hover-item' to="/academic-prospectus" onClick={() => handleMenu(true)}>শ্রেনী ভিত্তিক বিষয় সমূহ</Link>
                        </div>
                    </div>
                    <Link className='nav-item student' onClick={() => handStudent(!stdToggle)}>শিক্ষার্থী</Link>
                    <div className={stdToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">

                            <Link className='hover-item' to="/student-salary" onClick={() => handleMenu(true)}>বেতন</Link>
                            <Link className='hover-item' to="/student-uniform" onClick={() => handleMenu(true)}>ইউনিফর্ম</Link>
                            <Link className='hover-item' to="/our-student" onClick={() => handleMenu(true)}>ছাত্রছাত্রীর তালিকা</Link>
                            <Link className='hover-item' to="/success-story" onClick={() => handleMenu(true)}>শিক্ষার্থীদের সাফল্যের গল্প</Link>
                            <Link className='hover-item' to="/innovative-project" onClick={() => handleMenu(true)}>উদ্ভাবনী প্রকল্প</Link>
                        </div>
                    </div>
                    <Link className='nav-item result' onClick={() => handResult(!resToggle)}>ফলাফল
                    </Link>
                    <div className={resToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">
                            <Link className='hover-item' to="/board-result" onClick={() => handVorti(true)}>অভ্যন্তরীন পরীক্ষার ফলাফল</Link>
                            <Link className='hover-item' to="/board-result" onClick={() => handleMenu(true)}>বোর্ড পরীক্ষার ফলাফল</Link>
                        </div>
                    </div>
                    <Link className='nav-item resource' onClick={() => handResource(!recToggle)}>রিসোর্স
                    </Link>
                    <div className={recToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">

                            <Link className='hover-item' to="/digital-classroom" onClick={() => handleMenu(true)}>ডিজিটাল ক্লাস কনটেন্ট</Link>
                            <Link className='hover-item' to="/library" onClick={() => handleMenu(true)}>গ্রন্থাগার</Link>
                            <Link className='hover-item' to="/computer-lab" onClick={() => handleMenu(true)}>কম্পিউটার ল্যাব</Link>
                            <Link className='hover-item' to="/play-ground" onClick={() => handleMenu(true)}>খেলার মাঠ</Link>
                            <Link className='hover-item' to="/co-curricular-activities" onClick={() => handleMenu(true)}>সহ-পাঠক্রম সংক্রান্ত কার্যক্রম</Link>
                            <Link className='hover-item' to="/co-curricular-activities" onClick={() => handleMenu(true)}>প্রকাশনা</Link>
                            <Link className='hover-item' to="/citizen-chart" onClick={() => handleMenu(true)}>সিটিজেন চার্টার</Link>
                        </div>
                    </div>
                    <Link className='nav-item gallery-item' onClick={() => handGallery(!gallToggle)}>গ্যালারী
                    </Link>
                    <div className={gallToggle ? 'display' : 'hover-item-mobile-view'}>
                        <div className="hover-items">

                            <Link className='hover-item' to="/photo-gallery" onClick={() => handleMenu(true)}>ফটো গ্যালারী</Link>
                            <Link className='hover-item' to="/video-gallery" onClick={() => handleMenu(true)}>ভিডিও গ্যালারী</Link>
                        </div>
                    </div>
                    <Link className='nav-item communication' to="/communication">যোগাযোগ</Link>
                    <a target="_blank" rel="noopener noreferrer" className='nav-item payment' href="https://live.academyims.com/Student_Portal?fbclid=IwAR2QO6Ew_frUxmFQ8655ApCEZnZu6g9s6G7OPvuguNjP24P9MzaNHzq4YDE">ফি পেমেন্ট</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;