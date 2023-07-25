import React from 'react';
import './HridoyBongoBondu';
import './bongobondu.css'
import img_b1 from '../../assets/bongobondu/b1.jpeg'
import img_b2 from '../../assets/bongobondu/b2.jpeg'
import img_b3 from '../../assets/bongobondu/b3.jpeg'
import img_b4 from '../../assets/bongobondu/b4.jpeg'
import img_b5 from '../../assets/bongobondu/b5.jpeg'
import img_b6 from '../../assets/bongobondu/b6.jpeg'
import img_b7 from '../../assets/bongobondu/b7.jpeg'
import img_b8 from '../../assets/bongobondu/b8.jpeg'
import img_b9 from '../../assets/bongobondu/b9.jpeg'
import img_b10 from '../../assets/bongobondu/b10.jpeg'
import TopBanner from '../../SharedComponent/TopBanner/TopBanner';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import BottomImg from '../../SharedComponent/BottomImg/BottomImg';
import Footer from '../../SharedComponent/Footer/Footer';
import book1 from '../../assets/bongobondu/book1.jpeg'
import book2 from '../../assets/bongobondu/book_2.png'
import book3 from '../../assets/bongobondu/book_3.jpeg'
import book4 from '../../assets/bongobondu/book_4.jpeg'
import { aboutLink } from '../../Data/aboutbongobondu';
import { Link } from 'react-router-dom';
import Banner from './Banner';
const HridoyBongoBondu = () => {
    return (
        <div>
            <TopBanner />
            <NavBar />
            <div className="bongobondu__container">
                <div className="title">
                    <h2>হৃদয়ে বঙ্গবন্ধু</h2>
                    <h4>‘হে বন্ধু বঙ্গবন্ধু, তোমার কালো ফ্রেমের চশমাটা আমায় দাও, আমি চোখে দিয়ে দেখব, তুমি কেমন করে দেশটাকে এতো ভালোবাসো</h4>
                </div>
                <Banner />
                <div className="video__gallery-container">
                    <h2>Video Gallery</h2>
                    <div className="video__gallery">
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/Uu967gl03MU" title="বঙ্গবন্ধুর ঐতিহাসিক ৭ই মার্চের ভাষণ | Historical 07th March Speech of Bangabandhu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/L7zt1DwbEkE" title="জাতিসংঘে বঙ্গবন্ধুর বাংলায় দেওয়া ভাষণ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/ivw0GfoSSPA" title="দুর্নীতিবাজ লুটেরাদের বিরুদ্ধে বঙ্গবন্ধুর বজ্রকন্ঠ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/U4uZtE4tU_I" title="ঢাকা স্টেডিয়ামে মুক্তিযোদ্ধাদের অস্ত্র সমর্পণ ও বঙ্গবন্ধুর ভাষণ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/188hvm_fW7E" title="বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তন, পর্ব ১" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="407" height="229" src="https://www.youtube.com/embed/txHzq6LdDY4" title="পাকিস্তান থেকে মুক্তি লাভের পর ভারতে বঙ্গবন্ধুকে সংবর্ধনা ও বঙ্গবন্ধুর ভাষণ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="photo__gallery-container">
                    <h2>Photo Gallery</h2>
                    <div className="photo__gallery">
                        <img src={img_b1} alt="" />
                        <img src={img_b2} alt="" />
                        <img src={img_b3} alt="" />
                        <img src={img_b4} alt="" />
                        <img src={img_b5} alt="" />
                        <img src={img_b6} alt="" />
                        <img src={img_b7} alt="" />
                        <img src={img_b8} alt="" />
                        <img src={img_b9} alt="" />
                        <img src={img_b10} alt="" />
                    </div>
                </div>
                <div className="bongobondu__data-container">
                    <div className="book__container">
                        <button className='bongobondu-btn'>Books</button>
                        <div className="books">
                            <img src={book1} alt="" />
                            <img src={book2} alt="" />
                            <img src={book3} alt="" />
                            <img src={book4} alt="" />
                        </div>
                    </div>
                    <div className="import__container">
                        <button className='bongobondu-btn'>Important Links</button>
                        <div className="important__link">
                            {
                                aboutLink.map((link, idx) => {
                                    return <Link to={link.link} target="_blank" key={idx}><i className="fa-solid fa-circle-arrow-right" style={{ color: '#813588' }}></i>{link.name}</Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <BottomImg />
            <Footer />
        </div>
    );
};

export default HridoyBongoBondu;