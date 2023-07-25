import React from 'react';
import './director.css';
import DirectorData from './DirectorData';
import director_1 from '../../assets/d_1.jpeg'
import director_2 from '../../assets/d_2.jpeg'
const Director = () => {
    return (
        <div className='director'>
            <DirectorData
                btnName = "অধ্যক্ষের বাণী"
                directorImg = {director_1}
                directorName = "মোঃ সালাহউদ্দিন আহাম্মদ"
                institution = "অধ্যক্ষের নাঙ্গুলী নেছারিয়া কামিল মাদ্রাসা বাণী"
                modalTitle = "অধ্যক্ষের"
                bani = "মাদ্রাসা (আরবি: مدرسة‎‎, madrasah বহুবচনে مدارس, madāris) আরবি শব্দ দারসুন থেকে উদ্ভূত যার অর্থ 'পাঠ'। মাদ্রাসা মূলত মুসলমানদের অধ্যয়ন-গবেষণা প্রতিষ্ঠান। সাধারণ অর্থে মাদ্রাসা হচ্ছে আরবি ভাষা ও ইসলামি বিষয়ে অধ্যয়নের প্রতিষ্ঠান। মাদ্রাসার প্রাথমিক স্তর মক্তব, নূরানি বা ফোরকানিয়া মাদ্রাসা নামে অভিহিত।"
            />
            <DirectorData
                btnName = "উপাধ্যক্ষের বাণী"
                directorImg = {director_2}
                directorName = "মোঃ মাহবুব হায়দার"
                institution = "উপাধ্যক্ষের নাঙ্গুলী নেছারিয়া কামিল মাদ্রাসা বাণী"
                modalTitle = "উপাধ্যক্ষের"
                bani = "মাদ্রাসা (আরবি: مدرسة‎‎, madrasah বহুবচনে مدارس, madāris) আরবি শব্দ দারসুন থেকে উদ্ভূত যার অর্থ 'পাঠ'। মাদ্রাসা মূলত মুসলমানদের অধ্যয়ন-গবেষণা প্রতিষ্ঠান। সাধারণ অর্থে মাদ্রাসা হচ্ছে আরবি ভাষা ও ইসলামি বিষয়ে অধ্যয়নের প্রতিষ্ঠান। মাদ্রাসার প্রাথমিক স্তর মক্তব, নূরানি বা ফোরকানিয়া মাদ্রাসা নামে অভিহিত।"
            />
        </div>
    );
};

export default Director;