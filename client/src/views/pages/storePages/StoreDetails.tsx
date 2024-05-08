import {useEffect , useState} from 'react';
import {Link} from "react-router-dom"
import {getData} from '../../../utils/GetData'
// import axios from 'axios';
import { toast } from 'sonner';




const StoreDetails = ({ store}:any) => {


  const [cat , setCat] = useState<any>([])

  useEffect(() => {
    getData("/category/"+store.store_id+"/all")
    .then((res): void => {
        setCat(res.categories)
    })
}, [store])

  // function deleteCategory(id:number){
  //   axios.delete(`${import.meta.env.VITE_API_URL}/category/`+id)
  //     .then(()=>{ 
  //       getData("/category/"+store.store_id+"/all")
  //       .then((res): void => {
  //           setCat(res.categories)
  //           toast.success("Category deleted successfully")
  //       })
  //     })
  //     .catch((error)=>{
  //       console.error("Error occurred:", error);
  //       toast.error("An error occurred, please try again later")
  //     })

  // }

  console.log(cat)

      return(
        <>
      <div className="contain">

       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Store Details</h2>
      <div className="grid grid-cols-2 gap-x-4">

        <div>
          <img src="https://picsum.photos/200/300"  className="size-[7rem] rounded-full m-2 object-cover"/>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Address:</p>
          <p className="">{store.address}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Mobile:</p>
          <p>{store.mobile}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Fax:</p>
          <p>{store.fax}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Store Name:</p>
          <p>{store.store_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Store Type:</p>
          <p>{store.store_type}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">VAT Status:</p>
          <p>{store.vat_status}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Status:</p>
          <p>{store.status}</p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="font-semibold">Notes:</p>
          <p>{store.noteDisplay}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Email:</p>
          <p>{store.email}</p>
        </div>
      </div>
    </div>
    <Link to={"/store/edit/"+store.store_id}>
      <button className="w-full bg-orange-600 text-white p-2 rounded-md shadow-lg mt-2" 
      >
        Edit Store
      </button>
    </Link>
   
            </div>


            <div className="contain mt-3">
              <h1 className="font-bold text-xl p-3">
                Store Categories
              </h1>


              <div>
                  {
                    cat ?
                    cat.lenght
                    ?
                    'Categories found'
                    :

                    'No categories assigned'
                    : toast("Something went wrong")
                  }
              </div>
              <button className='w-full bg-green-500 p-2 text-white rounded-md shadow-lg mt-3'>
                Add Category
              </button>
            </div>
        </>
      )
  };
  

export default StoreDetails;