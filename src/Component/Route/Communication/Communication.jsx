import React from 'react';
import './communication.css'
const Communication = () => {
    return (
        <div className='communication-container'>
            <h3>যোগাযোগ</h3>
            <div className='form-text-container'>
                <p><i className="fa-solid fa-location-dot"></i>নাঙ্গুলী নেছারিয়া কামিল মাদ্রাসা</p>
                <p><i className="fa-solid fa-phone"></i>মোবাইল : ০১৭৩৭০১০১০১</p>
                <p><i className="fa-sharp fa-solid fa-globe"></i>ওয়েবসাইট : www.automate.com.bd</p>
                <p><i className="fa-solid fa-envelope"></i>ইমেইল: info@automate.com.bd</p>
            </div>
            <p className='form-heading'>এই ফর্মটি ব্যবহার করে আপনার প্রশ্ন জমা দিন</p>
            <form action="">
                <label htmlFor="subject">বিষয় *</label>
                <input id="subject" type="text" placeholder='বিষয়' required/>
                <label htmlFor="name">নাম  *</label>
                <input id="name" type="text" placeholder='নাম' required/>
                <label htmlFor="email">ইমেইল  *</label>
                <input id="email" type="text" placeholder='ইমেইল' required/>
                <label htmlFor="email">মোবাইল  *</label>
                <input id="email" type="number" placeholder='মোবাইল' required/>
                <label htmlFor="message">ম্যাসেজ</label>
                <textarea placeholder='বার্তা পাঠান' required></textarea>
                <input className='send-btn' type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Communication;