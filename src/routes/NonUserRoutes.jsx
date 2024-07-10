import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import CalendarComp from '../pages/Calendar'

export default function nonUserRoutes() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events' element={<CalendarComp />} />
          {/* <Route path='/*' element={<Home />} /> */}
        </Routes>
      
    </div>
  )
}
