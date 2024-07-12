import React from 'react';
import { Link } from 'react-router-dom';
export default function ClubCard(props) {
  console.log(props.path);
  return (
    <Link to={`/${props.path}`} className='flex flex-col items-center w-[45%] md:w-1/4 p-6 bg-white dark:bg-[#3E3E3A] dark:text-white shadow-lg shadow-black lg:shadow-sm rounded-3xl transform transition-transform hover:scale-105'>
      <img src={props.logo} alt="Club Logo" className='w-20 h-20 md:w-28 md:h-28 rounded-full mb-4 border-2 border-white' />
      <h1 className='font-medium md:text-xl text-center'>{props.name}</h1>
    </Link>
  );
}
