import React from 'react';
import TopBanner from '../SharedComponent/topBanner/TopBanner';
import { Outlet } from 'react-router-dom';
import './layout.css'
import NavBar from '../SharedComponent/NavBar/NavBar';
import SideNav from '../SharedComponent/SideNav/SideNav';
import Footer from '../SharedComponent/Footer/Footer';
import BottomImg from '../SharedComponent/BottomImg/BottomImg';
const Layout = () => {
    return (
        <div className='full__layout'>
            <TopBanner/>
            <NavBar/>
            <div className="home-layout">
                <div className='outlet'>
                    <Outlet></Outlet>
                </div>
                <div className='side-nav'>
                   <SideNav/>
                </div>
            </div>
            <BottomImg/>
            <Footer/>
        </div>
    );
};

export default Layout;