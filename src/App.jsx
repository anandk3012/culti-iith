import React from 'react'
import { UserAuth } from './context/AuthContext'
import NonUserRoutes from './routes/NonUserRoutes'
import UserRoutes from './routes/UserRoutes'


export default function App() {
  const { isLoggedOut } = UserAuth();
  return (
    <div>
      {isLoggedOut ? (<NonUserRoutes />) : (<UserRoutes />)}
    </div>
  )
}
