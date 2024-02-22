import { LuHome } from "react-icons/lu";
import { FiGrid } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiBox } from "react-icons/fi";


const navLinks =[
    {
        name:"Dashboard",
        link:"/dashboard",
        icon:<LuHome/>
    },
    {
        name:"View Stores",
        link:"/store",
        icon:<FiBox />
    },
    {
        name:"Category",
        link:"/category",
        icon:<FiLayers />
    },
    {
        name:"Products",
        link:"/products",
        icon:<FiGrid />
    },

]


export {navLinks}