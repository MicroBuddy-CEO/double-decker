import React from 'react';
import "./Navbar.css";
import { FiBookOpen } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const Navbar = () => {

    const menuItem = (
        <>
        <li>Locations</li>
        <li>Shops</li>
        <li>GiftCards</li>
        <li>Food Track</li>
        <li>Email Club</li>
        </>
    )
    return (
        <div className="navbar bg-transparent">

            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BurgerHub</a>
            </div>

            <div className="navbar-start hidden lg:flex">
            <a className="btn  btn-ghost normal-case text-2xl font-700">BurgerHub</a>

                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>

            <div className='navbar-center bg-[#039311] w-[181px] h-[60px] rounded-lg menu-btn text-white'>
                <p className='text-[20px] font-[800] mx-auto flex justify-items-center leading-none'> MENU <FiBookOpen className='ml-4'/></p>
            </div>

            <div className="navbar-end text-[20px] font-[800]">
                <p className='mr-10'>+880-1911223344</p>
                <a className="btn bg-white border-0 text-black text-[20px] font-[800]">NEW YOURK <MdOutlineKeyboardArrowDown className='text-2xl'/></a>
            </div>

        </div>
    );
};

export default Navbar;