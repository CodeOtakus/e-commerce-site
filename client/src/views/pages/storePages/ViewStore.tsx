import React, {useEffect , useState} from 'react'
import {useParams , Navigate , Link} from 'react-router-dom'
import {getData} from '../../../utils/GetData'
import Empty from '../Empty'
import StoreDetails from './StoreDetails'

export default function ViewStore() {

    const {id} = useParams()
    const [store , setStore] = useState<any>({})
    const [cat , setCat] = useState<any>([])

    useEffect(() => {
        let data = getData("/store/"+id)
        data.then((res): void => {
            res.store ? setStore(res.store):window.location.href ="/notfound"
            
        })
    }, [])


    useEffect(() => {
        let data = getData("/category/"+ store.store_id +"/all")
        data.then((res): void => {
            res.categories ? setCat(res.cat): window.location.href ="/notfound"
        })

    }, [])


  return (

    store ?
        <div className="max-w-4xl mx-auto ">
            <StoreDetails store={store}  />
        </div>

 
    
    : "loading ...."
        
  )
}
