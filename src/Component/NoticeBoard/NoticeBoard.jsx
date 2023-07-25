import React from 'react';
import './notice.css';
import world from '../../assets/world-23.png'
import { Link } from 'react-router-dom';

import mujibBorsho from '../../assets/mujib_vorsho.jpg'
import subontojoyonti from '../../assets/subontojoyonti-home.jpg'
import NoticeCard from './NoticeCard';
import downloadPdf from '../../noticpdf/notice.pdf'
import downloadPdf2 from '../../noticpdf/notice _1.pdf'
import downloadPdf3 from '../../noticpdf/notice_2.pdf'
import downloadPdf1 from '../../noticpdf/notice_3.pdf'
import downloadPdf4 from '../../noticpdf/notice_4.pdf'
const NoticeBoard = () => {
    return (
        <div>
            <div className='notice-container'>
                <h3>নোটিশ</h3>
                <img src={world} alt="" />
                <div className='listItem'>
                    <ul>
                        <Link to={downloadPdf} download="Example-PDF-document"
                            target="_blank"
                            rel="noreferrer"><i className="fa-solid fa-play icon"></i>
                            ড্রাইভিং প্রশিক্ষক নিয়োজন বিজ্ঞপ্তি.....
                        </Link>
                        <Link to={downloadPdf4} download="Example-pdf-document" target="_blank" rel="noreferrer"> <i className="fa-solid fa-play icon"></i>
                            মে-আগস্ট সেসনে বিনা কোর্স ফিতে মোটর ড্রাইভিং উইথ বেসিক মেইনটেন্যান্স কোর্সে ভর্ত.....
                        </Link>
                        <Link to={downloadPdf1} download="Example-pdf-document" target="_blank" rel="noreferrer"> <i className="fa-solid fa-play icon"></i>
                            ট্রেডসমূহের সাবস্টোর/লাইব্রেরী/সিকিউরিটি/স্পোর্টস গুডস/একাডেমিক/মেইন স্টোর ভেরিফ.....</Link>
                        <Link to={downloadPdf2} download="Example-pdf-document" target="_blank" rel="noreferrer"> <i className="fa-solid fa-play icon"></i>
                            নারায়ণগঞ্জ টিএসসি-তে ই-গভর্ন্যান্স ও উদ্ভাবন কর্মপরিকল্পনা ২০২২-২৩ বাস্তবায়ন সংক.....</Link>
                        <Link to={downloadPdf3} download="Example-pdf-document" target="_blank" rel="noreferrer"> <i className="fa-solid fa-play icon"></i>
                            নবম শ্রেণির ফলাফল ২০২২.....</Link>
                    </ul>
                </div>
                <Link to="/all-notice"><button className='notice-btn'>সকল নোটিশ</button></Link>
            </div>
            <div className='noticeCard-container'>
                <NoticeCard
                    clsName="notice-card"
                    img={mujibBorsho}
                    button="হৃদয়ে বঙ্গবন্ধু"
                    link = "/hrioyebongobondu"
                    btnCls="notice-card-btn"
                />
                <NoticeCard
                    clsName="notice-card"
                    img={subontojoyonti}
                    button="সুবর্ণ জয়ন্তী কর্নার"
                    link = "/sobornojointy"
                    btnCls="notice-card-btn"
                />

            </div>
        </div>
    );
};

export default NoticeBoard;