import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../pages/UserDashboard'
import Navbar from '../components/Navbar'

export default function userRoutes() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/*' element={<UserDashboard />} />
        </Routes>
    </div>
  )
}
