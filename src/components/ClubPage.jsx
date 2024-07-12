import React from 'react'
import MemberCard from './MemberCard'
export default function ClubPage({ data }) {
    const teamData = data.team;
    return (
        <div className='min-h-screen bg-[#292927] text-white'>
            <div className='w-[80%] bg-[#3E3E3A] flex items-center shadow-md shadow-black justify-evenly rounded-[3rem] p-4 mx-auto '>
                <img src={data.logoClub} alt="" className='w-60 h-fit rounded-[2rem] p-3' />
                <div className='w-1/2 flex flex-col rounded-[3rem] p-4'>
                    <p className='w-full text-4xl text-white text-start py-3 mx-auto' >{data.name}</p>
                    <p className='w-full text-xl text-white text-start font-light mx-auto' >{data.description}</p>
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
                <h1 className='flex items-center gap-5 text-xl md:text-4xl p-4 mb-5 mt-20'> <hr className="w-[45%] md:w-[5%]" /> Team <hr className="w-[45%] md:w-[80%]" /> </h1>
            </div>
            <div className='w-[80%] flex flex-wrap justify-evenly items-center p-4 mx-auto '>
                {
                    teamData.map((member) => {
                        return (
                            <MemberCard key={member.name} data={member} />
                        )
                    })
                }
            </div>

        </div>
    )
}
