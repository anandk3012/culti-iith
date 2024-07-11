import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../pages/UserDashboard'
import Navbar from '../components/Navbar'
import Nav1bar from '../components/Nav1bar'

export default function userRoutes() {
  return (
    <div>
      <Nav1bar />
        <Routes>
          <Route path='/*' element={<UserDashboard />} />
        </Routes>
    </div>
  )
}
