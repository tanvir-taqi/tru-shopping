
import React from 'react';

import HomeBanner from './HomeBanner';

import Shop from '../Shop/Shop';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <HomeBanner></HomeBanner>
           
            <Shop limit={6}>
                <Link to='/shop' className='underline'>See All</Link>
            </Shop>
        </div>
    );
};

export default Home;