import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function UserDashboard() {
  const {user} = UserAuth();
  return (
    <div className='min-h-screen bg-[#292927]'>
      <h1 className='text-center text-4xl dark:text-white '>Welcome {user?.firstName}!!</h1>
    </div>
  )
}
