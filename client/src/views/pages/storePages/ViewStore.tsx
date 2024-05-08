import {useEffect , useState} from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import {getData} from '../../../utils/GetData'
import StoreDetails from './StoreDetails'

export default function ViewStore() {

    const {id} = useParams()
    const [store , setStore] = useState<any>({})
    const [setCat] = useState<any>([])
    let navigate = useNavigate()

    useEffect(() => {
        let data = getData("/store/"+id)
        data.then((res): void => {
            res.store ? 
            setStore(res.store)
            : 
            navigate("/notfound")
            
        })
    }, [])


    useEffect(() => {
        let data = getData("/category/"+ store.store_id +"/all")
        data.then((res): void => {
            res.categories ? setCat(res.cat): navigate("/notfound")
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
