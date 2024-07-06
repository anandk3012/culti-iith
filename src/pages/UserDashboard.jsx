import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function UserDashboard() {
  const {user} = UserAuth();
  return (
    <div>
      <h1 className='text-center text-2xl  my-5 text-bold'>Welcome {user?.firstName}!!</h1>
    </div>
  )
}
