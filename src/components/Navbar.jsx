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
        <div className='w-full p-4 flex justify-between bg-[#292927] font-light items-center dark:text-white  shadow-2xl shadow-black'>
            <Link to="/" className='flex items-center text-xl md:ml-5'>
                <img src={cultiLogo} alt="" className='w-14 max-h-16' />
            </Link>
            <div className='lg:flex flex flex-col'>
                <div className='block lg:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center ${isOpen ? 'flex flex-col lg:relative absolute bg-[#292927] right-0 top-20 lg:top-auto lg:right-auto text-center w-32 rounded-lg' : 'hidden'} w-full lg:w-auto`}>
                    {isLoggedOut ? (
                        <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-lg text-semibold'>
                            <Link className='p-3 hover:text-[#FFC600] ' to="/" onClick={toggleMenu}>Home</Link>
                            <Link className='p-3 hover:text-[#FFC600]' to="/events" onClick={toggleMenu}>Events</Link>
                            <Link className='p-3 hover:text-[#FFC600]' to="/login" onClick={toggleMenu}>Login</Link>
                            <Link className='p-3 pb-6 md:pb-3 hover:text-[#FFC600]' to="/create-user" onClick={toggleMenu}>Register</Link>
                        </div>
                    ) : (
                        <Link
                            to='/'
                            onClick={() => {
                                handleLogOut();
                                toggleMenu();
                            }}
                            className='p-3 hover:text-[#FFC600] px-4 py-2 rounded-md'
                        >
                            Logout
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
}
