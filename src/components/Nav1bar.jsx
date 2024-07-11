import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { logOut } from '../functions/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import cultiLogo from '../assets/culti-logo.png';

export default function Nav1bar() {
    const { isLoggedOut } = UserAuth();
    const handleLogOut = () => {
        logOut();
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='p-4 bg-[#292927] '>
            <div className='w-full p-2 flex justify-between bg-[#3E3E3A] font-light items-center dark:text-[#FFC600]  rounded-[3rem]'>
                <Link to="/" className='flex items-center text-xl md:ml-7'>
                    <img src={cultiLogo} alt="" className='w-14 max-h-16' />
                </Link>
                <div className='lg:flex flex flex-col'>
                    <div className='block lg:hidden'>
                        <button onClick={toggleMenu} className='text-[#FFC600] focus:outline-none mr-4'>
                            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                        </button>
                    </div>
                    <nav className={`lg:flex lg:items-center ${isOpen ? 'flex flex-col lg:relative absolute right-4 top-24 lg:top-auto lg:right-auto text-center w-1/2 rounded-lg' : 'hidden'} bg-[#3E3E3A]   lg:w-auto`}>
                        {isLoggedOut ? (
                            <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-md font-medium mr-4'>
                                <Link className='p-3 hover:text-white ' to="/" onClick={toggleMenu}>Home</Link>
                                <Link className='p-3 hover:text-white' to="/events" onClick={toggleMenu}>Events</Link>
                                <Link className='p-3 hover:text-white' to="/login" onClick={toggleMenu}>Login</Link>
                                <Link className='p-3 pb-6 md:pb-3 hover:text-white' to="/create-user" onClick={toggleMenu}>Register</Link>
                            </div>
                        ) : (
                            <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-md font-medium mr-4'>
                                <Link
                                    to='/'
                                    onClick={() => {
                                        handleLogOut();
                                        toggleMenu();
                                    }}
                                    className=' hover:text-[#FFC600] px-4 py-2 rounded-md'
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}
