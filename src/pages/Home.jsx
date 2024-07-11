import React, { useState } from 'react'
import { clubs } from '../data/clubData'
import ClubCard from "../components/ClubCard";

export default function Home() {
  const [isCulti, setIsCulti] = useState(true);
  const handleClick = () => {
    setIsCulti(!isCulti);
  }

  // Clubs Data
  const cultiClubs = clubs.cultural;
  const litClubs = clubs.literary;
  console.log(cultiClubs)

  return (
    <div className='min-h-screen bg-[#292927] text-white'>

      {/* Main Landing Heading */}
      <h1 className='flex flex-col justify-center items-center w-[90%] md:w-2/3 text-3xl md:text-5xl font-light text-center text-wrap py-5 mx-auto '><span> Cultural & Literary Council, IIT Hyderabad </span></h1>
      
      
      {/* Clubs Section */}
      <div className='min-h-screen w-[80%] mx-auto' >
        <h1 className='flex items-center gap-5 text-xl md:text-4xl p-4 mb-5 mt-20'> <hr className="w-[45%] md:w-[5%]"/> Clubs <hr className="w-[45%] md:w-[80%]"/> </h1>
        <div className='w-full bg-[#3E3E3A] rounded-[2rem] p-5 flex gap-5 justify-start md:text-lg'>
          <button className={`${isCulti ? 'text-[#FFC600] ' : 'text-white '} p-1 `} onClick={handleClick} >Cultural</button>
          <button className={`${!isCulti ? 'text-[#FFC600] ' : 'text-white '} p-1 `} onClick={handleClick} >Literary</button>
        </div>
        {
          isCulti ?

            <div className='flex flex-wrap justify-evenly gap-3 my-10'>
              {
                cultiClubs.map((club) => {
                  return (<ClubCard key={club.id} name={club.name} description={club.description} logo={club.logoClub} />)
                })
              }
            </div>
            :
            <div className='flex flex-wrap justify-evenly gap-3 mt-10'>
              {
                litClubs.map((club) => {
                  return (<ClubCard key={club.id} name={club.name} description={club.description} logo={club.logoClub} />)
                })
              }
            </div>
        }
      </div>


      {/* About Section - Upcoming */}
      <div>
        About cultural Council
      </div>
    </div>
  )
}
