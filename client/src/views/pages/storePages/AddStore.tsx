import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function() {


  const [storeData, setStoreData] = useState({
    store_name:null,
    email:null,
    address:null,
    mobile:null,
    fax:null,
    store_type:null,
    logo:null,
    vat:null,
    noteDisplay:null,
    reciept_prefix:null,
    no_of_empolyees:null,
    taxes:[],
  }) 

  return (

    <div className="flex flex-col gap-y-5">
      <Link to="/store">
      <button className="border-2 border-gray-600 text-gray-600 p-2 px-10 max-md:px-5 rounded-full">Back</button>
      </Link>

      <div>
        <form className=""> 
        <input type="text" placeholder="Store Name" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />
        <input type="text" placeholder="Store Location" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />
          <label htmlFor="search" className="sr-only">Search</label>
          <input type="text" id="search" placeholder="Search" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />
          <input type="text" id="search" placeholder="Search" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />
          <input type="text" id="search" placeholder="Search" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />
          <input type="text" id="search" placeholder="Search" className="shadow-lg p-2 px-10 max-md:px-5 rounded-full" />

        </form>
      </div>
       
    </div>
  )
}
