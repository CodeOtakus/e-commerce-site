import {useEffect , useState} from 'react';
import {Link} from "react-router-dom"
import {getData} from '../../../utils/GetData'
import axios from 'axios';
import { toast } from 'sonner';


const StoreDetails = ({ store}:any) => {


  const [cat , setCat] = useState<any>([])

  useEffect(() => {
    getData("/category/"+store.store_id+"/all")
    .then((res): void => {
        setCat(res.categories)
    })
}, [store])

  function deleteCategory(id:number){
    axios.delete("http://localhost:8000/api/category/"+id)
      .then(()=>{ 
        getData("/category/"+store.store_id+"/all")
        .then((res): void => {
            setCat(res.categories)
            toast.success("Category deleted successfully")
        })
      })
      .catch((error)=>{
        console.error("Error occurred:", error);
        toast.error("An error occurred, please try again later")
      })

  }

      return(
        <>

            <div className="w-full bg-white shadow-lg flex p-2 items-center rounded-md justify-between">

                <h1 className="capitalize font-semibold text-gray-700 text-xl">{store.store_name}</h1>

                <img src="https://picsum.photos/200/300" alt="" className=" size-[3rem] rounded-full " />
            </div>


            <div className="grid mt-5 grid-cols-2 space-x-2  ">
                <div className=" bg-white rounded-md shadow-lg p-2 flex flex-col font-semibold">
                  <p>Sales Count</p>
                  {store.salesCount || 0}
                </div>

                <div className=" bg-white rounded-md shadow-lg p-2 font-semibold">
                <p>Employee Count</p>
                  {store.no_of_employees}
                </div>
            </div>


            <div className="w-full bg-white mt-5 p-2 rounded-md shadow-lg    ">
              <h1 className="  p-2 flex flex-col font-semibold">Taxes</h1>

              

            </div>

            <div className="grid grid-cols-2 w-full space-x-3">
            <Link to={"/store/edit/"+ store.store_id}>
                <button className="mt-5 bg-green-600 p-2 rounded-md 
           text-white w-full ">Add Tax</button>
            </Link>

            <Link to={"/store/edit/"+ store.store_id}>
                <button className="mt-5 bg-blue-500 p-2 rounded-md text-white w-full">Edit Store</button>
            </Link>

            </div>

         

            <div className="w-full bg-white mt-5 p-2 rounded-md shadow-lg  ">
            <h1 className="  p-2 flex flex-col font-semibold">Categories</h1>

           <div> 
            {
              cat.map((cat:any,index:number)=>{
                return(

                  
                  <div key={index} className="w-full bg-white shadow-lg rounded-md p-3 mb-2 flex items-center justify-between">
                    <div>
                      <h1 className="font-semibold text-gray-700 text-lg">{cat.category_name}</h1>
                    </div>

                    <div className="flex space-x-2 p-2">
                      
                         <button onClick= {()=>deleteCategory(cat.category_id)} className='p-2 bg-red-500 text-white rounded-md ' >Delete</button>
                      
                      <Link to={"/store/category/"+cat.category_id}>
                         <button className='p-2 bg-green-500 text-white rounded-md ' >View</button>
                      </Link>
                    </div>
                    

                  </div>

                )
              })
            }
            </div>

            </div>
        </>
      )
  };
  

export default StoreDetails;