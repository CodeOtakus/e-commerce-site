import React from 'react'
import NavItems from './NavItems'

export default function Navbar() {
  return (
    <nav className="w-[15rem] h-screen fixed p-5 flex flex-col  justify-between max-lg:hidden bg-white shadow-lg">
        <div >
           <div className=" flex flex-col items-center gap-y-2 w-full  p-2 rounded-md">
                <img src="https://picsum.photos/id/237/200/300" alt="logo" className="w-20 h-20 rounded-full object-cover" />

                <div className=" text-center">
                    <p className="font-semibold">Tetteh Kephas</p>
                    <p className="text-xs text-gray-500">tettehkephas@outlook.com</p>
                </div>
           </div>

            <div className=' mt-5'>
                <NavItems />
              
            </div>
        </div>
       
        <div>
            <button className="bg-red-600 w-full p-1 text-white text-lg rounded-md  hover:drop-shadow-xl transition-all ease-in-out hover:-translate-y-1" >Logout</button>
        </div>
    </nav>
  )
}
