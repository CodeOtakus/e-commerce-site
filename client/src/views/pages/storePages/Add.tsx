import Input from "../../components/Input"
import { useState, useEffect } from 'react';
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { toast } from 'sonner';



function Add() {
    
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(
        {userID:null}
    );

    useEffect(()=>{
        const User = localStorage.getItem("User");
        if(User){
            
            setUser(JSON.parse(User));
            setFormData({...formData, user_id:JSON.parse(User).userID})
        }
        else{
            navigate("/login");
        }

        
    },[])
    console.log(user)
    

    const [formData, setFormData] = useState <any>({
        store_name: "",
        address: "",
        mobile: "",
        postal_code:"",
        receipt_prefix:"",
        noteDisplay:"",
        store_type:"",
        logo:"",
        user_id:"",
        fax:"",
        email:""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/store/add`, formData)
            .then(() => {
                toast.success("Store created successfully")
                navigate("/store")
            })
            
    }
    
  return (
        <div className="contain">
            <h1 className="text-3xl text-orange-500 tracking-tight font-bold">Add New Store</h1>

            <form className="space-y-3" onSubmit={handleSubmit} >
                
                   <Input name="store_name" placeholder="eg: Happy mart" type="text" label="Store Name" onchange={handleInputChange} required/>

                   <Input name="email" placeholder="eg: happymart@test.com" type="email" label="Store Email" onchange={handleInputChange} required/>

                   <Input name="address" placeholder="eg: Accra, Ghana " type="text" label="Store Address" onchange={handleInputChange} required/>

                   <Input name="mobile" placeholder="eg: 023349900" type="text" label="Store Mobile" onchange={handleInputChange}/>

                    <Input name="store_type" placeholder="eg: Retail" type="text" label="Store Type" onchange={handleInputChange} />

                    <Input name="postal_code" placeholder="eg: 00233" type="text" label="Postal Code" onchange={handleInputChange} required/>

                   <Input name="receipt_prefix" placeholder="eg: MartCO" type="text" label=" receipt prefix" onchange={handleInputChange} required/>

                   <Input name="fax" placeholder="eg: (123)-456-7890" type="text" label="Fax" onchange={handleInputChange} required/>

                   <Input name="noteDisplay" placeholder="eg: Provide you with quality goods" type="text" label="Display Note" onchange={handleInputChange} />

                   <Input name="logo" placeholder="" type="file" label="Logo" onchange={handleInputChange} />
                

                <button className="w-full bg-orange-500 text-white mt-5 rounded-md drop-shadow-lg p-3 font-semi-bold text-xl">
                    Add Store
                </button>
            </form>
        </div>
  )
}

export default Add