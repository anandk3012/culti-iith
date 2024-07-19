import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import Login from '../pages/Login'
import Nav1bar from '../components/Nav1bar'
import Navbar from '../components/Navbar'
import CalendarComp from '../pages/Calendar'
import Load1 from '../pages/loadingPages/Load1'

import Infocus from '../pages/clubPages/Infocus'
import Shuffle from '../pages/clubPages/Shuffle'
import Btl from '../pages/clubPages/Btl'
import Gesture from '../pages/clubPages/Gesture'
import Otaku from '../pages/clubPages/Otaku'
import Ebsb from '../pages/clubPages/Ebsb'
import Writing from '../pages/clubPages/Writing'
import Quiz from '../pages/clubPages/Quiz'
import Rdm from '../pages/clubPages/Rdm'
import Bmc from '../pages/clubPages/Bmc'
import Debate from '../pages/clubPages/Debate'
import WordGames from '../pages/clubPages/WordGames'
import Vibes from '../pages/clubPages/Vibes'

export default function nonUserRoutes() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading completion after a certain time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoadingComplete(true);
    }, 5000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {
        loadingComplete ?
          <>
            <Nav1bar />
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/login' element={<Login />} />
              <Route path='/events' element={<CalendarComp />} />

              {/* ClubPages Routes */}
              {/* Culti Clubs */}
              <Route path='/infocus' element={<Infocus />} />
              <Route path='/shuffle' element={<Shuffle />} />
              <Route path='/btl' element={<Btl />} />
              <Route path='/gesture' element={<Gesture />} />
              <Route path='/otaku' element={<Otaku />} />
              <Route path='/ebsb' element={<Ebsb />} />
              <Route path='/rdm' element={<Rdm />} />
              <Route path='/vibes' element={<Vibes />} />

              {/* LitSoc */}
              <Route path='/writing' element={<Writing />} />
              <Route path='/bmc' element={<Bmc />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/debate' element={<Debate />} />
              <Route path='/wordgames' element={<WordGames />} />
            </Routes>
          </>
          :
          (<Load1 isLoading={isLoading} loadingComplete={loadingComplete} />)
      }
    </div>
  )
}
