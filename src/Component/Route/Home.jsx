import React from 'react';
import TopBanner from '../../SharedComponent/topBanner/TopBanner';
import Banner from '../Banner/Banner';
import TextSlider from '../Texslider/TextSlider';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import RouteContainer from '../Routecontainer/RouteContainer';
import Memory from '../Memory/Memory';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import BottomImg from '../../SharedComponent/BottomImg/BottomImg';
import Footer from '../../SharedComponent/Footer/Footer';
import SideNavHome from '../../SharedComponent/SideNavHome/SideNavHome';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <NavBar />
            <div className="home-layout">
                <div className='outlet'>
                    <Banner />
                    {/* <TextSlider/> */}
                    <NoticeBoard />
                    <RouteContainer />
                    <Memory />
                    <Map/>
                </div>
                <div className='side-nav'>
                    <SideNavHome />
                </div>
            </div>
            <BottomImg />
            <Footer />

        </div>
    );
};

export default Home;