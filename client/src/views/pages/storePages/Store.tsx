import {  useLayoutEffect , useState} from "react"
import { getData } from "../../../utils/GetData"


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
    <div>{store.store}</div>
  )
}
