
import React, { useEffect } from 'react';

import HomeBanner from './HomeBanner';

import Shop from '../Shop/Shop';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

const Home = () => {

    
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return (
        <div>
            <HomeBanner></HomeBanner>
           
            <Shop limit={6}>
                <Link to='/shop' className='md:mx-4 text-sm font-semibold my-2 px-5 py-1 text-black hover:text-[#fd6a53] border border-transparent w-[200px] text-center hover:border-[#fd6a53] duration-1000 hover:rounded-xl'>See All</Link>
            </Shop>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;