
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
                    isPending ? "relative p-3" : isActive ? "relative p-3 bg-orange-600 flex items-center text-white rounded-md transition-all ease-out gap-x-5" : " relative p-3 flex items-center  gap-x-5 text-gray-500 "
                  }
                >
                    <span className="max-xl:text-3xl">{link.icon} </span> <span className="max-xl:hidden max-md:block">{link.name}</span>
                </NavLink>
                )
            })
        }
    </div>
  )
}
