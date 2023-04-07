import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { BiAlignMiddle, BiUserCircle } from "react-icons/bi";
import './Navbar.css'
import { AuthContext } from '../../../userContext/UserContext';


const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const {user,logOut} = useContext(AuthContext)


    const handleLogOut =()=>{
        logOut()
                .then(res => { })
                .catch(err => console.log(err))
    }

    return (
        <div className='' >
            <div className={`fixed top-0 bg-[#0a0c1bfd] z-50 w-full header py-2 header-container  flex flex-col md:flex-row justify-around items-center `}>
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' className={`font-bold flex  text-lg md:text-3xl`}>
                        <h1 className='text-white title-navbar'>TruSoppinG</h1>
                    </Link>

                    <button className='block md:hidden text-[#fd6a53]' onClick={() => setDisplay(!display)}><BiAlignMiddle></BiAlignMiddle></button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                         <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-[#fd6a53]' : 'mr-4 text-lg font-semibold text-white  my-2')} to='/'>Home</NavLink>
                         <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-[#fd6a53]' : 'mr-4 text-lg font-semibold text-white  my-2')} to='/shop'>Shop Now</NavLink>
                         <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-[#fd6a53]' : 'mr-4 text-lg font-semibold text-white  my-2')} to='/orders'>Orders</NavLink>
                       



                        {
                            user ? <>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-[#fd6a53]' : 'mr-4 text-lg font-semibold text-white  my-2')} to='/dashboard'>Dashboard</NavLink>

                               
                                <button onClick={handleLogOut} className='md:mx-4 text-sm font-semibold my-2 px-5 py-1 text-white hover:text-[#fd6a53] border border-transparent hover:border-[#fd6a53] duration-700 hover:rounded-xl'>Sign Out</button>

                            </>
                                :  <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-[#fd6a53]' : 'mr-4 text-lg font-semibold text-white  my-2')} to='/join'>Join Now</NavLink>

                        }

                    </div>





                </div>
            </div>

        </div>
    )

};

export default Navbar;