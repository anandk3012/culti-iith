import React, { useState } from 'react'
import { clubs } from '../data/clubData'
import ClubCard from "../components/ClubCard";

export default function Home() {
  const [isCulti, setIsCulti] = useState(true);
  const handleClick = () => {
    setIsCulti(!isCulti);
  }

//   useEffect(() => {
//     if (isCulti) {
//         document.documentElement.classList.add('genre');
//         localStorage.setItem('genre', 'culti');
//     } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('genre', 'lit');
//     }
// }, [isCulti]);

  // Clubs Data
  const cultiClubs = clubs.cultural;
  const litClubs = clubs.literary;
  // console.log(cultiClubs)

  return (
    <div className='min-h-screen bg-[#dddddb] dark:bg-[#292927]  text-black dark:text-white'>

      {/* Main Landing Heading */}
      <h1 className='flex flex-col justify-center items-center w-[90%] md:w-2/3 text-3xl md:text-5xl font-light text-center text-wrap py-5 mx-auto '><span> Cultural & Literary Council <br /> IIT Hyderabad </span></h1>


      {/* Clubs Section */}
      <div className='min-h-screen w-[80%] mx-auto' >
        <h1 className='flex items-center gap-5 text-2xl md:text-4xl p-4 mb-5 mt-20'> <hr className="w-[45%] md:w-[5%] border-black dark:border-white" /> Clubs <hr className="w-[45%] md:w-[80%] border-black dark:border-white " /> </h1>
        <div className='w-full bg-white dark:bg-[#3E3E3A] rounded-[2rem] p-5 flex gap-5 justify-start md:text-lg'>
          <button className={`${isCulti ? ' font-semibold text-black dark:text-[#FFC600] ' : 'dark:text-white '} p-1 `} onClick={handleClick} >Cultural</button>
          <button className={`${!isCulti ? ' font-semibold text-black dark:text-[#FFC600] ' : 'dark:text-white '} p-1 `} onClick={handleClick} >LitSoc</button>
        </div>
        {
          isCulti ?
            <div className='flex flex-wrap justify-evenly gap-3 my-10'>
              {
                cultiClubs.map((club) => {
                  return (<ClubCard key={club.id} name={club.name} description={club.description} logo={club.logoClub} path={club.path} />)
                })
              }
            </div>
            :
            <div className='flex flex-wrap justify-evenly gap-3 mt-10'>
              {
                litClubs.map((club) => {
                  return (<ClubCard key={club.id} name={club.name} description={club.description} logo={club.logoClub} path={club.path} />)
                })
              }
            </div>
        }
      </div>


      {/* About Section - Upcoming */}
      <div className='min-h-screen w-[80%] flex flex-col items-center mx-auto'>
        <h1 className='w-full flex items-center gap-5 text-2xl md:text-4xl p-4 mb-5 mt-20'> <hr className="w-[25%] md:w-[5%] border-black dark:border-white" /> About Us <hr className="w-[25%] md:w-[75%] border-black dark:border-white " /> </h1>
        <h1>Coming soon...</h1>
      </div>
    </div>
  )
}
