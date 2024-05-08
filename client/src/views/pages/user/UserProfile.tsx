import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import axios from 'axios';
import { toast } from 'sonner';


function UserProfile() {

  
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

const [formData] = useState<any>({})
  useEffect(()=>{
      const User = localStorage.getItem("User");
      if(User){
         
          setUser(JSON.parse(User));
      }
      else{
        navigate("/login");
      }

      
  },[])



  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    let fieldName = e.target.name; 
    let value = e.target.value; 
    
   
    formData[fieldName] = value;
    console.log(formData);

}

  async function update(e: any){
    e.preventDefault()
   await  axios.patch("http://localhost:8000/api/user/"+ user.userID, formData)
    .then((res)=>{
      toast.success("User data updated sucessfully")
      console.log(res.data.user)
      localStorage.setItem("User",  JSON.stringify(res.data.user));
    })
    .catch((err)=>{
      console.log(err)
      toast.error("An error occured try again later")
    })
  }

  return (
    <div className="contain">
      <img src="https://placehold.co/400" alt="" className="mx-auto rounded-full w-[10rem] h-[10rem] mb-3" />


      <div>
        <h1 className="text-2xl font-bold text-center capitalize">{user.name}</h1>
        <p className="text-center text-gray-500">@{user.username}</p>
      </div>

    

      <hr className="mt-8 mb-4" />

      <section className="space-y-4 divide-y-2">
        <h2 className="text-lg font-bold">Account Information</h2>
        <form onSubmit={update}>
        <ul className="space-y-4 " >
          <li>
            <Input name="name" label="Name" value={user.name} onchange={handleChange} />
          </li>
          <li>
          <Input name="eemail" label="Email" value={user.email} onchange={handleChange} />
          </li>

          <li>
          <Input name="address" label="Address" value={user.address} onchange={handleChange} />
          </li>
          <li>
          <Input name="mobile" label="Mobile" value={user.mobile} onchange={handleChange} />
          </li>
          <li>
          <Input name="country" label="Country" value={user.country} onchange={handleChange} />
          </li>
          <li>
          <Input name="postal_code" label="Postal Code" value={user.postal_code} onchange={handleChange} />
          </li>
          <li>
          <Input name="username" label="Username" value={user.username} onchange={handleChange} />
          </li>
          <li>
          <Input name="city" label="City" value={user.city} onchange={handleChange} />
          </li>


          <button className="text-white bg-orange-500 p-3 text-xl rounded-md w-full shadow-lg">
            Save changes
          </button>
        </ul>
        </form>
        
      </section>
      </div>
  )
}

export default UserProfile