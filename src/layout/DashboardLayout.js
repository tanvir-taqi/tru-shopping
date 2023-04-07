import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

const DashboardLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="">
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[1fr,7fr] ">
                <div className="bg-[#fd6a5367]  p-2 rounded-tr-full rounded-br-full justify-start md:pt-56 flex flex-col items-end">
                    <button className="block md:hidden text-black focus:outline-none" onClick={toggleMenu}>
                        {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt1 size={30} />}
                    </button>
                    <nav className={`md:flex flex-col ${isMenuOpen ? 'flex ' : 'hidden'}`}>
                     
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'mr-6 text-base font-bold my-2 text-black'
                                    : 'mr-6 text-base font-semibold text-[#141414] my-2'
                            }
                            to="/dashboard/orderlist"
                        >
                            Order List
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'mr-6 text-base font-bold my-2 text-black'
                                    : 'mr-6 text-base font-semibold text-[#141414] my-2'
                            }
                            to="/dashboard/myproducts"
                        >
                            My Products
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'mr-6 text-base font-bold my-2 text-black'
                                    : 'mr-6 text-base font-semibold text-[#141414] my-2'
                            }
                            to="/dashboard/addproducts"
                        >
                            Add Products
                        </NavLink>
                    </nav>
                </div>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
