import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { logOut } from '../functions/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import cultiLogo from '../assets/culti-logo.png';

export default function Navbar() {
    const { isLoggedOut } = UserAuth();
    const handleLogOut = () => {
        logOut();
    };
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full p-4 flex justify-between bg-black font-bold font-Inter items-center text-[#FEC601] shadow-2xl shadow-black'>
            <Link to="/" className='flex items-center text-xl ml-5'>
                <img src={cultiLogo} alt="" className='w-14 max-h-16' />
            </Link>
            <div className='block lg:hidden'>
                <button onClick={toggleMenu} className='text-[#FEC601] focus:outline-none'>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>
            <nav className={`lg:flex lg:items-center ${isOpen ? 'flex flex-col' : 'hidden'} w-full lg:w-auto`}>
                {isLoggedOut ? (
                    <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-lg'>
                        <Link className='p-2 hover:text-yellow-300' to="/" onClick={toggleMenu}>Home</Link>
                        <Link className='p-2 hover:text-yellow-300' to="/events" onClick={toggleMenu}>Events</Link>
                        <Link className='p-2 hover:text-yellow-300' to="/login" onClick={toggleMenu}>Login</Link>
                        <Link className='p-2 hover:text-yellow-300' to="/create-user" onClick={toggleMenu}>Register</Link>
                    </div>
                ) : (
                    <Link 
                        to='/' 
                        onClick={() => {
                            handleLogOut();
                            toggleMenu();
                        }} 
                        className='bg-black text-[#FEC601] px-4 py-2 rounded-md'
                    >
                        Logout
                    </Link>
                )}
            </nav>
        </div>
    );
}
