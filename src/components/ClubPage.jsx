import React from 'react'
import MemberCard from './MemberCard'
export default function ClubPage({ data }) {
    const teamData = data.team;
    return (
        <div className='min-h-screen bg-[#dddddb] dark:bg-[#292927] dark:text-white'>
            <div className='w-[80%] bg-white dark:bg-[#3E3E3A] flex flex-col lg:flex-row items-center shadow-md dark:shadow-black justify-evenly rounded-[3rem] p-4 mx-auto '>
                <img src={data.logoClub} alt="" className='w-60 h-fit rounded-[2rem] p-3' />
                <div className=' lg:w-1/2 flex flex-col rounded-[3rem] p-4'>
                    <p className='w-full text-2xl md:text-4xl text-start py-3 mx-auto' >{data.name}</p>
                    <p className='w-full text-md md:text-xl  text-start dark:font-light mx-auto' >{data.description}</p>
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
            <h1 className='flex items-center gap-5 text-2xl md:text-4xl p-4 mb-5 mt-20'> <hr className="w-[45%] md:w-[5%] border-black dark:border-white" /> Team <hr className="w-[45%] md:w-[80%] border-black dark:border-white " /> </h1>
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
