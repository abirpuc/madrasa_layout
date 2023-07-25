import React from 'react';
import './roouecontainer.css'
import RouteCard from './RouteCard';
import Campus from '../../assets/campus.png'
import Admission from '../../assets/admission.png'
import CourseList from "../../assets/course-list.png"
import AcademicPaper from "../../assets/academic_paper.png"
import Student from "../../assets/Examination_ex.png"
import Result from "../../assets/GPA.png"
import Resource from "../../assets/resources-.png"
import Gallery from "../../assets/gallery.png"
import Communication from "../../assets/communicaion.png";
import Management from "../../assets/scholarship.png"
const RouteContainer = () => {
    return (
        <div className='route-card-container'>
            
            <RouteCard
                heading = "আমাদের সম্পর্কে"
                img = {Campus}
                list = {
                    [
                    {
                            name:"আমাদের সম্পর্কে",
                            to : '/',
                    },
                    {
                            name:"ইতিহাস",
                            to : '/history',
                    },
                        
                    {
                            name:"প্রাতিষ্ঠানিক অবকাঠামো",
                            to : '/academic-infrastructure',
                    },
                    {
                            name:"বিধি ও প্রবিধান",
                            to : '/information-of-purity',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "ব্যবস্থাপনা"
                img = {Management}
                list = {
                    [
                        {
                            name:"অধ্যক্ষ",
                            to : '/director-genarel',
                    },
                        {
                            name:"উপাধ্যক্ষ",
                            to : '/director-vocational',
                    },
                        {
                            name:"পরিচালনা কমিটি",
                            to : '/faculty-member',
                    },
                        {
                            name:"আমাদের শিক্ষকমন্ডলী",
                            to : '/faculty-member',
                    },
                        {
                            name:"প্রাক্তন অধ্যক্ষ মহোদয়গণ",
                            to : '/faculty-member',
                    },
                        {
                            name:"আমাদের কর্মীরা",
                            to : '/staff',
                    },
                        {
                            name:"সফল সাবেক শিক্ষার্থী",
                            to : '/staff',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "একাডেমীক তথ্য"
                img = {AcademicPaper}
                list = {
                    [
                        {
                            name:"শ্রেণী সময়সূচি",
                            to : '/academic-syllabus',
                    },
                        {
                            name:"একাডেমিক প্রসপেক্টাস",
                            to : '/',
                    },
                        {
                            name:"পরীক্ষার সময়সূচি",
                            to : '/exam-schedule',
                    },
                        {
                            name:"সিলেবাস",
                            to : '/education-calendar',
                    },
                        {
                            name:"প্রসপেক্টাস",
                            to : '/academic-prospectus',
                    },
                        {
                            name:"শ্রেনী ভিত্তিক বিষয় সমূহ",
                            to : '/academic-prospectus',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "শিক্ষার্থী"
                img = {Student}
                list = {
                    [
                        {
                            name:"বেতন",
                            to : '/student-salary',
                    },
                        {
                            name:"ইউনিফর্ম",
                            to : '/student-uniform',
                    },
                        {
                            name:"পরীক্ষার ব্যবস্থা",
                            to : '/',
                    },
                        {
                            name:"ছাত্রছাত্রীর তালিকা",
                            to : '/our-student',
                    },
                        {
                            name:"শিক্ষার্থীদের সাফল্যের গল্প",
                            to : '/success-story',
                    },
                        {
                            name:"উদ্ভাবনী প্রকল্প",
                            to : '/innovative-project',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "ফলাফল"
                img = {Result}
                list = {
                    [
                        {
                            name:"অভ্যন্তরীন পরীক্ষার ফলাফল",
                            to : '/board-result',
                    },
                        {
                            name:"বোর্ড পরীক্ষার ফলাফল",
                            to : '/board-result',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "রিসোর্স"
                img = {Resource}
                list = {
                    [
                        {
                            name:"ডিজিটাল ক্লাস কনটেন্ট",
                            to : '/digital-classroom',
                    },
                        {
                            name:"গ্রন্থাগার",
                            to : '/library',
                    },
                        {
                            name:"কম্পিউটার ল্যাব",
                            to : '/computer-lab',
                    },
                        {
                            name:"খেলার মাঠ",
                            to : '/play-ground',
                    },
                        {
                            name:"সহ-পাঠক্রম সংক্রান্ত কার্যক্রম",
                            to : '/co-curricular-activities',
                    },
                        {
                            name:"প্রকাশনা",
                            to : '/citizen-chart',
                    },
                        {
                            name:"সিটিজেন চার্টার",
                            to : '/citizen-chart',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "গ্যালারী"
                img = {Gallery}
                list = {
                    [
                        {
                            name:"ফটো গ্যালারী",
                            to : '/photo-gallery',
                    },
                        {
                            name:"ভিডিও গ্যালারী",
                            to : '/video-gallery',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "যোগাযোগ"
                img = {Communication}
                list = {
                    [
                        {
                            name:"যোগাযোগ",
                            to : '/communication',
                    },
                    ]
                }
            />
        </div>
    );
};

export default RouteContainer;