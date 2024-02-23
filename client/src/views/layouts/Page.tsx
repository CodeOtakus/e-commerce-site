import React,{useState} from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import {userlinks} from '../../Data.jsx'
import {NavLink} from "react-router-dom"




export default function Page({name}) {
  const[show, setshow] = useState(false)


  return (
    <div className="relative lg:ml-[15rem]">
      <nav className="bg-white w-full h-[4rem] border-l-2 shadow-lg flex justify-between items-center px-5 z-40 sticky top-0">
          <div className="flex gap-x-2 items-center">
            <div><HiMenu className="text-2xl lg:hidden" /> </div>
            <div className="lg:text-2xl text-xl" >Ecommerce site </div>
          </div>

          <div>
            <FaRegCircleUser className="text-3xl max-md:text-2xl " onClick={ ()=> setshow(!show)}/>
          </div>

          <div className={`absolute bg-white w-[12rem] top-[5rem] right-5 z-40 p-3 shadow-lg  flex flex-col rounded-md gap-y-3  ${show ? "block" : "hidden "}`}>
           {
            userlinks.map((link, index) => {
              return(
                <NavLink
                to={link.link}
                key={index}
                className={({ isActive, isPending }) =>
                  isPending ? "relative p-2" : isActive ? "relative p-2 bg-orange-600 flex items-center text-white rounded-md transition-all ease-out gap-x-5" : " relative p-2 flex items-center  gap-x-5 text-gray-500 "
                }
                onClick={ ()=> setshow(!show)}
              >
                  {link.icon} {link.name}
              </NavLink>
              )
            })
           }
          </div>
      </nav>

      <div className=" p-5 relative ">
        {name}

        
      </div>
    </div>
  )
}
