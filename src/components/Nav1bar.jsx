import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { logOut } from '../functions/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiMoon, BiSun } from 'react-icons/bi';
import cultiLogo from '../assets/culti-logo.png';

export default function Nav1bar() {
    const { isLoggedOut } = UserAuth();
    const handleLogOut = () => {
        logOut();
    };

    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='p-4 bg-[#EBEBE6] dark:bg-[#292927]'>
            <div className='w-full p-2 flex bg-transparent font-light items-center dark:bg-[#3E3E3A] dark:text-[#FFC600] rounded-[3rem]'>
                <div className='w-2/3'>
                    <Link to="/" className='flex items-center text-xl md:ml-7'>
                        <img src={cultiLogo} alt="Club Logo" className='w-14 max-h-16' />
                    </Link>
                </div>


                <div className='lg:flex flex flex-col w-1/3 md:w-1/4  dark:text-[#FFC600]'>
                    <div className='flex justify-end gap-5'>
                        {/* Dark Mode toggle Button */}
                        <div className='flex items-center justify-center lg:hidden'>
                            <button onClick={toggleDarkMode} >
                                {darkMode ? (
                                    <BiMoon className="h-6 w-6 text-[#FFC600] " />
                                ) : (
                                    <BiSun className="h-6 w-6 dark:text-[#FFC600] " />
                                )}
                            </button>
                        </div>
                        <div className=' w-1/5 flex justify-center lg:hidden'>
                            <button onClick={toggleMenu} className='dark:text-[#FFC600] w-fit focus:outline-none'>
                                {isOpen ? <FaTimes className='mx-auto' size={25} /> : <FaBars className='mx-auto' size={25} />}
                            </button>
                        </div>
                    </div>
                    <nav className={`lg:flex lg:items-center ${isOpen ? 'flex flex-col lg:relative absolute right-4 top-24 lg:top-auto lg:right-auto text-center w-1/2 rounded-lg' : 'hidden'} bg-[#EBEBE6] dark:bg-[#3E3E3A] lg:w-auto`}>
                        {isLoggedOut ? (
                            <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-md font-medium mr-4'>
                                <Link className='p-3 dark:hover:text-white' to="/" onClick={toggleMenu}>Home</Link>
                                <Link className='p-3 dark:hover:text-white' to="/events" onClick={toggleMenu}>Events</Link>
                                <Link className='p-3 dark:hover:text-white' to="/login" onClick={toggleMenu}>Login</Link>
                                <Link className='p-3 pb-6 md:pb-3 dark:hover:text-white' to="/create-user" onClick={toggleMenu}>Register</Link>
                            </div>
                        ) : (
                            <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-md font-medium mr-4'>
                                <Link className='p-3 hover:text-white' to="/" onClick={toggleMenu}>Home</Link>
                                <Link className='p-3 hover:text-white' to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                                <Link
                                    to='/'
                                    onClick={() => {
                                        handleLogOut();
                                        toggleMenu();
                                    }}
                                    className='hover:text-white p-3'
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>

                {/* Dark Mode toggle Button */}
                <div className='hidden lg:flex items-center justify-center w-1/12'>
                    <button onClick={toggleDarkMode} >
                        {darkMode ? (
                            <BiMoon className="h-6 w-6 text-[#FFC600] " />
                        ) : (
                            <BiSun className="h-6 w-6 dark:text-[#FFC600] " />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
