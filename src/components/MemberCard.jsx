import React from 'react'

export default function MemberCard({data}) {
  return (
    <div className='w-auto bg-[#3E3E3A] flex flex-col items-center justify-evenly text-start rounded-[2rem] p-8 shadow-md shadow-black '>
        <img src={data.photo} alt="" className='w-40 h-40 rounded-full mb-4  ' />
        <h1> {data.name} </h1>
        <h2>{data.position}</h2>
        <h2>{data.rollno}</h2>
    </div>
  )
}
