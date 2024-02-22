import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Default_layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Default_layout