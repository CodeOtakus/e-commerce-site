
import {Link} from 'react-router-dom'

export default function StoreDisplay({store}:any) {
  return (
    <>
         {
                             store.map((store:any , index:any) => {
                                return (
                                      <div  key={index} className='w-full rounded-md hover:shadow-lg items-center bg-white flex justify-between '> 
                                      
                                            <div className='p-2 flex items-center md:gap-x-4 gap-x-1'>
                                              <img src="https://picsum.photos/200/300" alt={store.name} className='w-[4rem] h-[4rem] rounded-full max-md:w-[3rem] max-md:h-[3rem]' />

                                              <div className='flex justify-between items-center p-2'>
                                                <div>
                                                  <h1 className='md:text-xl font-bold capitalize text-lg'>{store.store_name}</h1>
                                                  <p className='md:text-sm text-xs'>{store.store_type}</p>
                                                </div>
                                              </div>
                                            </div>


                                            <div className='p-5'>
                                                <Link to={"/store/" + store.store_id} className='bg-orange-500 rounded-md text-white p-2 w-4'>
                                                  View Store
                                                </Link>
                                            </div>
                                      </div>
                                    
                                )
                            })
                        }
    </>
  )
}
