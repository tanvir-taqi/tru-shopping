import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { BiAlignMiddle, BiUserCircle } from "react-icons/bi";
import './Navbar.css'
import { AuthContext } from '../../../userContext/UserContext';


const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const {user,logOut} = useContext(AuthContext)
    const [displayModal, setDisplayModal] = useState(false)


    const handleLogOut = () => {
        
        logOut()
            .then(res => {
                setDisplayModal(false)
             })
            .catch(err => console.log(err))
    
}

    return (
        <div className='' >
                 {
            // sign out modal
                displayModal && <div className='fixed top-0 right-0 z-50  bg-[#071b3fbb] text-white text-lg font-medium w-full h-screen flex justify-center items-center'>
                    <div className='flex flex-col items-center p-10 bg-[#071b3f] w-[300px] rounded-xl'>
                        <h1>Are You Sure?</h1>
                        <div className='flex justify-around items-center w-full '>
                            <button className='cursor-pointer' onClick={handleLogOut}>Yes</button>
                            <button className='cursor-pointer' onClick={() => setDisplayModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            }
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

                               
                                <button onClick={() => setDisplayModal(!displayModal)} className='md:mx-4 text-sm font-semibold my-2 px-5 py-1 text-white hover:text-[#fd6a53] border border-transparent hover:border-[#fd6a53] duration-700 hover:rounded-xl'>Sign Out</button>

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