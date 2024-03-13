import React, {useLayoutEffect , useState} from 'react'
import {useParams , Navigate , Link} from 'react-router-dom'
import {getData} from '../../../utils/GetData'
import Empty from '../Empty'

export default function ViewStore() {

    const {id} = useParams()
    const [store , setStore] = useState<any>({})
    const [cat , setCat] = useState<any>({})

    useLayoutEffect(() => {
        let data = getData("/store/"+id)
        data.then((res): void => {
            res.store ? setStore(res.store):window.location.href ="/notfound"
        })
    }, [])


    useLayoutEffect(() => {
        let data = getData("/category/"+ store.store_id+"/all")
        data.then((res): void => {
            res.categories ? setCat(res.categories): window.location.href ="/notfound"
        })

    }, [])


  return (
    <div className=" flex flex-col lg:flex-row">

        <div className='lg:w-1/3 w-full '>
        <div className="w-full flex justify-between bg-white p-3 rounded-md items-center mb-3">
                <div className="flex flex-col capitalize font-semibold">
                     <p className="text-2xl">{store.store_name}</p>
                    <p className="text-gray-500 text-xs">{store.store_type}</p> 
                </div>

                <img src="https://picsum.photos/200/300" className="w-[3rem] h-[3rem] rounded-full" />
            </div>


            <div className='p-3 bg-white mt-5 rounded-md w-full '>  
                <h1 className="text-xl font-semibold">Store Details</h1>
                <div className="flex flex-col gap-2 max-md:text-sm">
                    <div className="flex justify-between gap-x-1">
                        <p>Address:</p>
                        <p>{store.address}</p>
                    </div>
                    <div className="flex justify-between gap-x-1">
                        <p>Phone:</p>
                        <p>{store.mobile}</p>
                    </div>
                    <div className="flex justify-between gap-x-1">
                        <p>Email:</p>
                        <p>{store.email}</p>
                    </div>
                    <div className="flex justify-between gap-x-1">
                        <p>No. of Employees:</p>
                        <p>{store.no_of_employees}</p>
                    </div>
                    <div className="flex justify-between gap-x-1">
                        <p>Reciept Prefix:</p>
                        <p>{store.receipt_prefix}</p>
                    </div>

                    <Link to={"/store/edit/" + store.store_id}>
                        <button className="border-2 mt-4 border-gray-600 text-gray-600 p-2 w-full rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all ">Edit</button>
                    </Link>
                </div>
            </div>


        </div>
             
        

             <div className='bg-white max-lg:mt-5 p-3 rounded-md lg:w-2/3 lg:ml-4 '>
              
                <h1 className="text-xl font-semibold">Categories</h1>

                <div className=''>
                   {
                          cat.length > 0 ? 
                            
                                 <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Color</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            {
                                                cat.map((cat:any , index:any) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{cat.category_name}</td>
                                                            <td>{cat.color}</td>
                                                            <td>
                                                                <Link to={"/store/"+store.store_id+"/category/"+cat.category_id}>
                                                                    <button className="bg-orange-500 text-white p-2 rounded-md">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        
                                    </tbody>
                                 </table>
                            
                          : <Empty item="categorie" top='md:top-[7rem] top-[3rem]' />
                   }
                </div>
            </div>   

            
    </div>
  )
}
