import React,{useState} from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";

export default function Page({name}) {


  return (
    <div className="relative lg:ml-[15rem]">
      <nav className="bg-white w-full h-[4rem] border-l-2 shadow-lg flex justify-between items-center px-5 z-40 sticky top-0">
          <div className="flex gap-x-2 items-center">
            <div><HiMenu className="text-2xl lg:hidden" /> </div>
            <div className="lg:text-2xl text-xl" >Ecommerce site </div>
          </div>

          <div>
            <FaRegCircleUser className="text-2xl"/>
          </div>
      </nav>

      <div className=" p-5 relative ">
        {name}

        
      </div>
    </div>
  )
}
