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
        name:"Analytics",
        link:"/analytics",
        icon:<FiLayers />
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


const storeInputs = [
    {"name":"store_name" , "type":"text" , "label":"Store Name" , "placeholder":"Enter Store Name"},
]

export {navLinks , userlinks}