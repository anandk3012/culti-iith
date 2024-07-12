import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import Login from '../pages/Login'
import Nav1bar from '../components/Nav1bar'
import Navbar from '../components/Navbar'
import CalendarComp from '../pages/Calendar'

import Infocus from '../pages/clubPages/Infocus'
import Shuffle from '../pages/clubPages/Shuffle'
import Btl from '../pages/clubPages/Btl'
import Gesture from '../pages/clubPages/Gesture'
import Otaku from '../pages/clubPages/Otaku'
import Ebsb from '../pages/clubPages/Ebsb'
import Writing from '../pages/clubPages/Writing'
import Quiz from '../pages/clubPages/Quiz'

export default function nonUserRoutes() {
  return (
    <div>
      <Nav1bar />
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events' element={<CalendarComp />} />

          {/* ClubPages Routes */}
          <Route path='/infocus' element={<Infocus />} />
          <Route path='/shuffle' element={<Shuffle />} />
          <Route path='/btl' element={<Btl />} />
          <Route path='/gesture' element={<Gesture />} />
          <Route path='/otaku' element={<Otaku />} />
          <Route path='/ebsb' element={<Ebsb />} />
          <Route path='/writing' element={<Writing />} />
          <Route path='/quiz' element={<Quiz />} />
          {/* <Route path='/*' element={<Home />} /> */}
        </Routes>
      
    </div>
  )
}
