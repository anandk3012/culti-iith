import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { logOut } from '../functions/auth';

export default function Navbar() {
    const { isLoggedOut } = UserAuth();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <div className='w-full p-4 flex justify-between bg-[#FEC601] font-bold font-Inter'>
                <div className='w-auto flex text-center items-center text-xl '>CULTI IITH</div>
                <nav className='w-1/3 flex justify-evenly '>
                    {isLoggedOut ?
                        <div className='flex justify-evenly gap-4'>
                            <Link className='py-2' to="/">Home</Link>
                            <Link className='py-2' to="/login">Login</Link>
                            <Link className='py-2' to="/create-user">Register</Link>
                        </div> :
                        <Link 
                            to='/'
                            onClick={handleLogOut}
                            className='bg-black text-yellow-400 px-4 py-2 rounded-md'
                        >Logout</Link>
                    }
                </nav>
            </div>
        </div>
    )
}
