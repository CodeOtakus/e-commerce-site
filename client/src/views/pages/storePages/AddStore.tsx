import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Input from '../../components/Input'

export default function() {


  const [storeData, setStoreData] = useState({
    store_name:null,
    email:null,
    address:null,
    mobile:null,
    fax:null,
    store_type:null,
    logo:null,
    noteDisplay:null,
    reciept_prefix:null,
    no_of_empolyees:null,
    taxes:[],
  }) 

  function submit():void {
    /// send data to the server
  }

  return (

    <div className="flex flex-col gap-y-5 w-full">

      <div className="w-full">
        <form className="" onSubmit={():void =>console.log("hello")}> 
        <h1 className="text-3xl text-gray-600 mt-5 ">Basic store info</h1>
          <div className="form_group">
           <Input name={"store_name"} label={"Store Name"} placeholder={"eg: App Store"} type={"text"} required={true}  />
           <Input name={"email"} label={"Email"} placeholder={"eg: store@exapmle.com"}  type={"text"}required={true}  />
          </div>

          <div className="flex flex-col-reverse lg:flex-row  items-center justify-around">
          <Input name={"store_logo"} label={"Store Logo"} placeholder={"eg: App Store"} cutomStyle={"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semiboldfile:bg-white file:text-orange-500 bg-white lg:w-1/2  "} type={"file"} />
          </div>

          <h1 className="text-3xl text-gray-600 mt-10 lg:mt-[5rem]">More store info</h1>
          <div className="form_group">
            <Input label={"Address"} type={"text"} name={"address"} placeholder={"eg: Accra, Ghana"} required={true}  />
            <Input label={"Mobile"} type={"text"} name={"mobile"} placeholder={"eg: 0249929828"} required={true}  />
            <Input label={"Store Type"}  type={"text"} name={"store_type"} placeholder={"eg: Super market"} required={true}  />
          </div>

          <h1 className="text-3xl text-gray-600 mt-10 lg:mt-[5rem]">More store info</h1>
          <div className="form_group">
            <Input label={"Fax"} type={"text"} name={"fax"} placeholder={"eg: 1234567"} />
            <Input label={"Reciept Prefix"} type={"text"} name={"receipt_prefix"} placeholder={"eg: AS"} required={true}  />
            <Input label={"No. of Employees"}  type={"number"} name={"no_of_empolyees"} placeholder={"eg: 10"} required={true}  />
          </div>

          <button className="max-lg:w-full p-2 text-white font-semibold shadow-lg rounded-md bg-orange-500 hover:bg-orange-400 transition-all hover:translate-x-4 mt-[4rem] w-1/2 float-right"> Add Store </button>
        </form>
      </div>
       
    </div>
  )
}
