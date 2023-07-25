import React from 'react';
import bannertop from './topbanner.module.css';
// import bannerImg from '../../assets/TopBanner.jpg'
import madrashaImg from '../../assets/banner_m.jpeg'
import TopNav from '../TopNav/TopNav';
const TopBanner = () => {
    return (
        <>
        <div className={bannertop.top_banner_container}>
            <div className={bannertop.top_banner}>
                <TopNav/>
                <img src={madrashaImg} alt="" />
                {/* <div className={bannertop.text_container}>
                    <h1>নাঙ্গুলী নেছারিয়া কামিল মাদ্রাসা, খুলনা</h1>
                </div> */}
            </div>
        </div>
        </>
    );
};

export default TopBanner;