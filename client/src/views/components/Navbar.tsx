import NavItems from './NavItems'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { NavContext } from '../../App';


export default function Navbar() {

    const {showNavBar } = useContext(NavContext)
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
            
        }else{
            navigate("/login");
        }
       
  
        
    },[])
    
  
  return (
    <nav className={`w-[15rem] max-xl:w-[6rem] max-md:w-full  h-screen max-md:mt-[3rem] fixed p-5 flex flex-col  justify-between ${ showNavBar ?  "max-md:block" : "max-md:hidden"} bg-white shadow-lg z-40`}>
        <div >
           <div className=" flex flex-col items-center gap-y-2 w-full  p-2 rounded-md">
                <img src="https://picsum.photos/id/237/200/300" alt="logo" className="size-20 max-xl:size-10 rounded-full object-cover max-md:size-20" />

                <div className=" text-center max-xl:hidden max-md:block">
                    <p className="font-semibold ">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                </div>
           </div>

            <div className=' mt-5'>
                <NavItems />
              
            </div>
        </div>
       
       
    </nav>
  )
}
