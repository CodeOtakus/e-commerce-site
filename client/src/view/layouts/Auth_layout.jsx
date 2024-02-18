import React from 'react'
import { Outlet } from 'react-router-dom'


export default function auth_layout() {
  return (
    <>
    <div>
      <Outlet />
    </div>
    </>
  )
}
