import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

export default function Page({name}) {
  return (
    <div className="relative lg:ml-[15rem]">
      <nav className="bg-white w-full h-[4rem] border-l-2 shadow-lg flex justify-between items-center px-5">
          <div>
            Ecom
          </div>

          <div>
            <FaRegCircleUser className="text-2xl"/>
          </div>
      </nav>

      <div className=" p-5 ">
        {name}
      </div>
    </div>
  )
}
