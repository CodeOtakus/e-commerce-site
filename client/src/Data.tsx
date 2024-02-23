import { LuHome , LuLogOut , LuUser } from "react-icons/lu";
import { FiGrid , FiBox, FiLayers , FiSettings } from "react-icons/fi";

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



const userlinks =[
    {
        name:"Profile",
        link:"/profile",
        icon:<LuUser/>
    },
    {
        name:"Settings",
        link:"/settings",
        icon:<FiSettings />
    },
    {
        name:"Logout",
        link:"/logout",
        icon:<LuLogOut />
    }
]


export {navLinks , userlinks}