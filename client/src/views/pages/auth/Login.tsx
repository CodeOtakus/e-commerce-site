import axios from "axios";


export default function Login() {

    const formData = {
        email: '',
        password: ''
    }
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        let fieldName = e.target.name; 
        let value = e.target.value; 
        
       
        formData[fieldName] = value;

    }

    function login(e:Event){
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login',formData)
            .then((res)=>{
                console.log(res.data)
            })
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

    <p className="mt-3 text-gray-700 text-center">Don't have an account? <a href="/register" className="text-orange-500">Register</a></p>
</form>
            </div>
           
        </div>
    </div>
  )
}
