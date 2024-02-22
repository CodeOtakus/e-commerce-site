import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiBell } from "react-icons/bi";

export default function Navbar() {

    const navlinks =[
        {name:"Dashboard", to:"/dashboard", icon:<BiBell />},
        {name:"Dashboard", to:"/dashboard", icon:<BiBell />},
        {name:"Dashboard", to:"/dashboard", icon:<BiBell />},
        {name:"Dashboard", to:"/dashboard", icon:<BiBell />},
        {name:"Dashboard", to:"/dashboard", icon:<BiBell />},
    ]
  return (
   <nav className='w-full p-3 h-[5rem]'>
    <div>

    </div>
   </nav>
  )
}
