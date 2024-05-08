import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
const navigate = useNavigate();

useEffect(()=>{
    const user = localStorage.getItem("User");
    if(user){
        navigate("/");
    }

},[navigate])

    interface FormData {
        [key: string]: string; 
    }
    
    const formData: FormData = {
        email: '',
        password: ''
    };
    
    
    
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        let fieldName = e.target.name; 
        let value = e.target.value; 
        
       
        formData[fieldName] = value;
        console.log(formData);

    }

    async function login(e:any) {
        e.preventDefault();
        await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, formData)
            .then((res) => {
               localStorage.setItem("User",  JSON.stringify(res.data.user));
                toast.success(res.data.message);
                navigate("/");
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    }
    

  return (
    <div className="flex w-full h-screen justify-center items-center ">
        
        <div className="xl:w-[60%] w-[90%]  shadow-xl rounded-md flex items-center  flex-row bg-white">
            <div className="w-1/3 max-md:hidden">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="login" className="h-[30rem]" />
            </div>

            <div className="md:w-2/3 flex flex-col items-center p-5">
            <h2 className="text-2xl text-orange-500 font-semibold  ">Welcome <span className="text-black">Back</span></h2>

<p className="mt-2 text-gray-700 text-lg"> Enter credentials to login </p>

<form className="w-full mt-5" onSubmit={login} >
    <input type="text" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300" onChange={handleChange} name="email" />
    <input type='password' placeholder='Password' className="w-full p-2 mt-3 rounded-md border border-gray-300" onChange={handleChange} name="password"  />

    <button className="w-full bg-orange-500 text-white p-2 mt-3 rounded-md">Login</button>

    <p className="mt-3 text-gray-700 text-center">Don't have an account? <a href="/register" className="text-orange-500">Create an account</a></p>
</form>
            </div>
           
        </div>
    </div>
  )
}
