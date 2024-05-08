import {useState, useEffect , useContext } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import {userlinks} from '../../Data.jsx'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavContext } from '../../App';

type page ={
  page: any
}




export default function Page({page}: page) {

  const { showNavBar, setShowNavBar} = useContext(NavContext)
  const[show, setshow] = useState(false)


  const navigate = useNavigate();
  const [user, setUser] = useState<any>({
      name: "",
      email: "",
      username: "",
      address: "",
      country:"",
      city: "",
      mobile: "",
      postal_code: "",
      userID: "",
      uniid: "",
      updated_at: "",
      created_at: ""
  });
  
    useEffect(()=>{
        const User = localStorage.getItem("User");
        if(User){
           
            setUser(JSON.parse(User));
        }
        else{
          navigate("/login");
        }
  
        
    },[])

    console.log(user)
  


  return (
    <div className="relative max-xl:ml-[6rem] max-md:ml-[0rem] ml-[15rem]">
      <nav className="bg-white w-full h-[4rem] border-l-2 shadow-lg flex justify-between items-center px-5 z-40 sticky top-0">
          <div className="flex gap-x-2 items-center">
            <div><HiMenu className="text-2xl hidden max-md:block" onClick={()=>{setShowNavBar(!showNavBar)}} /> </div>
            <div className="lg:text-2xl text-xl" >Ecommerce site </div>
          </div>

          <div>
            <FaRegCircleUser className="text-3xl max-sm:text-2xl  " onClick={ ()=> setshow(!show)}/>
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

           <button
           className="mt-2 bg-red-600 p-2 shadow-lg rounded-md text-white"
           onClick={()=>{
              localStorage.removeItem("User");
              navigate("/login")
           }}
           >
            Log out 
           </button>
          </div>
      </nav>

      <div className=" p-5 relative ">
        {page}

        
      </div>
    </div>
  )
}
