import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-16'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;