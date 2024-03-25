import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../utils/GetData';
import Input from '../../components/Input';
import Axios from 'axios';
import {toast} from 'sonner'

export default function EditStore() {


    const { id } = useParams();
    const [store, setStore] = useState<any>({});
    const [storeData, setStoreData] = useState<any>({
    });


    useEffect(() => {
        let data = getData("/store/" + id);
        data.then((res): void => {
            res.store ? setStore(res.store) : (window.location.href = "/notfound");
        });
    }, []);


    const handlechange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setStoreData({...storeData, [event.target.name]: event.target.value})

    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await Axios.patch(" http://localhost:8000/api/store/"+ store.store_id, storeData );
            toast.success("Store updated successfully")
            
        } catch (error) {
            console.error("Error occurred:", error);
            toast.error("An error occurred, please try again later")
            
        }
    };


    return (
        <div className="flex gap-x-3 max-lg:flex-col ">
          <div className="w-1/2 max-lg:w-full">
        <form >
                    <Input name="store_name" type="text" label="Store Name" placeholder="Enter Store Name" value={store.store_name} onchange={handlechange} required={false} />

                    <Input name="email" type="text" label="Email" placeholder="Enter Store Email" value={store.email} onchange={handlechange} required={false} />

                    <Input name="store_type" type="text" label="Store Type" placeholder="Enter Store Type" value={store.store_type} onchange={handlechange} required={false} />

                    <Input name="address" type="text" label="Address" placeholder="Enter Address" value={store.address} onchange={handlechange} required={false} />

                    <Input name="logo" type="file" label="Store Logo"  onchange={handlechange} required={false} customStyle="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 bg-white" value={store.logo || null} />


                    <button className="w-full mt-3 bg-orange-500 p-2 text-white rounded-md" onClick={handleSubmit}>
                        Save Changes
                    </button>
                    
                
                   

                
            </form>
          </div>



          <div className="w-1/2 max-lg:w-full max-lg:mt-5">
            <div className="bg-white flex flex-col items-center w-full p-3 ">
                <img src="https://picsum.photos/200/300" className="w-[6rem] h-[6rem] rounded-full"/>



            <form>
               <input type="checkbox" name="productImage" id="" />
            </form>
            </div>

          
          </div>
        </div>
    );
}
