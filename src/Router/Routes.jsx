import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Route/Home";
import Collage from "../Component/Route/Collage/Collage";
import History from "../Component/Route/History/History";
import AcademicStructure from "../Component/Route/AcademicStructure/AcademicStructure";
import Infastructue from "../Component/Route/Infastructure/Infastructue";
import InformationPurity from "../Component/Route/InformationPurity/InformationPurity";
import Target from "../Component/Route/Target/Target"
import Application from "../Component/Application/Application";
import AdmissionTest from "../Component/AdmissionTest/AdmissionTest";
import AdmissionRule from "../Component/AdmissionRule/AdmissionRule";
import RegistrationSystem from "../Component/RegistrationSystem/RegistrationSystem";
import CurrentEducation from "../Component/CurrentEducation/CurrentEducation";
import AnnualPlan from "../Component/AnnualPlan/AnnualPlan";
import SscVocational from "../Component/Route/SSCVocational/SscVocationa";
import HscVocational from "../Component/Route/HscVocational/HscVocational";
import DirectorGenral from "../Component/Route/DirectorGeneral/DirectorGenral";
import Principal from "../Component/Route/Principal/Principal";
import Faculty from "../Component/Route/Faculty/Faculty";
import DirectorVocational from "../Component/Route/DirectorVocational/DirectorVocational";
import Staff from "../Component/Route/Staff/Staff";
import AcademicSyllabus from "../Component/Route/AcademicPaper/AcdemicSyllabus/AcademicSyllabus";
import AcademicProspectus from "../Component/Route/AcademicPaper/AcademicProspectus/AcademicProspectus";
import EducationCalendar from "../Component/Route/AcademicPaper/EducationCalendar/EducationCalendar";
import ExamSchedule from "../Component/Route/AcademicPaper/ExamSchedul/ExamSchedul";
import Salary from "../Component/Route/Students/Salary/Salary";
import Uniform from "../Component/Route/Students/Uniform/Uniform";
import ExamSystem from "../Component/Route/Students/ExamSystem/ExamSystem";
import RulesRegulation from "../Component/Route/Students/RulesRegulation/RulesRegulation";
import Students from "../Component/Route/Students/Students/Students"
import SuccessStory from "../Component/Route/Students/SuccessStory/SuccessStory";
import InnovativeProject from "../Component/Route/Students/InnovativeProjec/InnovativeProject";
import BoardResult from "../Component/Route/Result/BoardResult/BoardResult";
import DigitalClassroom from "../Component/Route/Resurrce/DigitalClassroom/DigitalClassroom";
import Library from "../Component/Route/Resurrce/Library/Library";
import ComputerLab from "../Component/Route/Resurrce/ComputerLab/ComputerLab";
import Playground from "../Component/Route/Resurrce/Playground/Playground";
import Activities from "../Component/Route/Resurrce/CoCurricurlarActivities/Activities";
import CitizenChart from "../Component/Route/Resurrce/CitizenChart/CitizenChart";
import PhotoGallery from "../Component/Route/Gallery/PhotoGallery/PhotoGallery";
import VideoGallery from "../Component/Route/Gallery/VideoGallery/VideoGallery";
import Communication from "../Component/Route/Communication/Communication";
import AllNotice from "../Component/NoticeBoard/AllNotice/AllNotice";
import TravelPhotoGallery from "../Component/Route/Gallery/TravelPhotoGallery/TravelPhotoGallery";
import TrainingPhotoGallery from "../Component/Route/Gallery/TrainingPhotoGallery/TrainingPhotoGallery";
import Overview from "../Component/Route/SSCVocational/Content/Overview";
import Facilities from "../Component/Route/SSCVocational/Content/Facilities";
import SingleStaff from "../Component/Route/SSCVocational/SingleStaff";
import FacultyMember from '../../public/FacultyMember.json'
import NotFound from "../Component/NotFound/NotFound";
import SobornoJointy from "../Page/Sobornojointy/SobornoJointy";
import HridoyBongoBondu from "../Page/HridoyBongoboundu/HridoyBongoBondu";
export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/collage',
                element:<Collage/>,
            },
            {
                path:'/history',
                element:<History/>,
            },
            {
                path:'/target',
                element:<Target/>,
            },
            {
                path:'/academic-structure',
                element:<AcademicStructure/>,
            },
            {
                path:'/academic-infrastructure',
                element:<Infastructue/>,
            },
            {
                path:'/information-of-purity',
                element:<InformationPurity/>
            },
            {
                path:'/application-process',
                element:<Application/>,
            },
            {
                path:'/admission-test',
                element:<AdmissionTest/>
            },
            {
                path:'/admission-rule',
                element:<AdmissionRule/>
            },
            {
                path:'/registration-system',
                element:<RegistrationSystem/>
            },
            {
                path:'/current-education',
                element:<CurrentEducation/>
            },
            {
                path:'/annual-plane',
                element:<AnnualPlan/>
            },
            {
                path:'/director-general',
                element:<DirectorGenral/>
            },
            {
                path:'/director-vocational',
                element:<DirectorVocational/>
            },
            {
                path:'/principal',
                element:<Principal/>
            },
            {
                path:'/faculty-member',
                element:<Faculty/>
            },
            {
                path:'/staff',
                element:<Staff/>
            },
            {
                path:'/academic-syllabus',
                element:<AcademicSyllabus/>
            },
            {
                path:'/academic-prospectus',
                element:<AcademicProspectus/>
            },
            {
                path:'/education-calendar',
                element:<EducationCalendar/>
            },
            {
                path:'/exam-schedule',
                element:<ExamSchedule/>
            },
            {
                path:'/student-salary',
                element:<Salary/>
            },
            {
                path:'/student-uniform',
                element:<Uniform/>
            },
            {
                path:'/exam-system',
                element:<ExamSystem/>
            },
            {
                path:'/rules-regulation',
                element:<RulesRegulation/>
            },
            {
                path:'our-student',
                element:<Students/>
            },
            {
                path:'/success-story',
                element:<SuccessStory/>
            },
            {
                path:'/innovative-project',
                element:<InnovativeProject/>
            },
            {
                path:'/board-result',
                element:<BoardResult/>
            },
            {
                path:'/digital-classroom',
                element:<DigitalClassroom/>
            },
            {
                path:'/library',
                element:<Library/>
            },
            {
                path:'/computer-lab',
                element:<ComputerLab/>
            },
            {
                path:'/paly-ground',
                element:<Playground/>
            },
            {
                path:'/co-curricular-activities',
                element:<Activities/>
            },
            {
                path:'/citizen-chart',
                element:<CitizenChart/>
            },
            {
                path:'/photo-gallery',
                element:<PhotoGallery/>
            },
            {
                path:'/video-gallery',
                element:<VideoGallery/>
            },
            {
                path:'/communication',
                element:<Communication/>
            },
            {
                path:'/all-notice',
                element:<AllNotice/>
            },
            {
                path:'/travel-photo-gallery',
                element:<TravelPhotoGallery/>
            },
            {
                path:'/training-photo-gallery',
                element:<TrainingPhotoGallery/>
            },
        ]
    },
    {
        path:'/ssc-vocational',
        element:<SscVocational/>,
        children: [
            {
                id: 1,
                to:'/course-details-overview',
                element: <Overview/>
            },
            {
                id: 2,
                to:'/course-details-activities',
                element: <Activities/>
            },
            {
                id: 1,
                to:'/course-details-facilities',
                element: <Facilities/>
            },
        ]
    },
    {
        path:'/hsc-vocational',
        element:<HscVocational/>
    },
    {
        path:'/single-staff/:id',
        loader:async({params})=>{
            return params
        },
        element:<SingleStaff/>
    },
    {
        path:'/sobornojointy',
        element:<SobornoJointy/>
    },
    {
        path:'/hrioyebongobondu',
        element:<HridoyBongoBondu/>
    },
    {
        path:'*',
        element:<NotFound/>,
    }
])