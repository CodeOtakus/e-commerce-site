import {  useLayoutEffect , useState} from "react"
import { getData } from "../../../utils/GetData"
import Empty from "../Empty"


export default function Store() {
    let id = "5507e890-b307-4529-a06c-d57d3cf323e0"
    const [store, setStore] = useState<any>([])

    useLayoutEffect(() => {
       let data = getData("/store/"+id+"/all")
         data.then((res) => {
              setStore(res.store)
         })
       
    }, [])
    console.log(store)



return (
    <div>
        <div className="flex w-full justify-between">
            <h1 className="text-3xl max-md:text-2xl font-semibold ">Store</h1>

            <button className={`p-2 text-white bg-orange-500 shadow-lg rounded-md md:w-[10rem] ${store.legth > 0 ? "" : " animate-bounce"}`}>Add Store</button>
        </div>
         {
            store.length > 0 ?
                    <p>Items</p>
                    :
                    <Empty item={"Store"} />
         }
    </div>
)
}
