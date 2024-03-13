import {  useLayoutEffect , useState} from "react"
import { Link } from "react-router-dom"
import { getData } from "../../../utils/GetData"
import Empty from "../Empty"
import StoreDisplay from "../../components/StoreDisplay"


export default function Store() {
    let id = "5507e890-b307-4529-a06c-d57d3cf323e0"
    const [store, setStore] = useState<any>([])

    useLayoutEffect(() => {
       let data = getData("/store/"+id+"/all")
         data.then((res) => {
            console.log(res.store)
              res.store ? setStore(res.store) : console.log("error" + res)
         }) 
       
    }, [])
   



return (
    <div>
        <div className="flex w-full justify-between">
            <h1 className="text-3xl max-md:text-2xl font-semibold ">Store</h1>
            
            <Link to="/store/add" >
            <button className={`p-2 text-white bg-orange-500 shadow-lg rounded-md md:w-[10rem] ${store.length > 0 ? "" : " animate-bounce"}`}>Add Store</button>
            </Link>
        </div>
         {
            store.length > 0 ?
                    <div className="w-full  justify-between flex mt-5  gap-3 flex-col">
                        <StoreDisplay store={store} />
                    </div>

                    
                    :
                    <Empty item={"Store"} />
         }
         
    </div>
)
}
