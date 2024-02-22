import React from 'react'
import {navLinks} from "../../Data.jsx"
import {NavLink} from "react-router-dom"


export default function () {
  return (
    <div className="flex flex-col gap-y-4">
        {
            navLinks.map((link, index) => {
                return (
                  <NavLink
                  to={link.link}
                  key={index}
                  className={({ isActive, isPending }) =>
                    isPending ? "relative p-3" : isActive ? "relative p-3 bg-orange-600 text-white rounded-md transition-all ease-out" : " relative p-3"
                  }
                >
                    {link.icon} {link.name}
                </NavLink>
                )
            })
        }
    </div>
  )
}
