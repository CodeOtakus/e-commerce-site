import {  useLayoutEffect , useState} from "react"
import { getData } from "../../../utils/GetData"


export default function Store() {
    let id = "5507e890-b307-4529-a06c-d57d3cf323e0"
    const [store, setStore] = useState<any>([])

    useLayoutEffect(() => {
       setStore(getData("/store/"+id+"/all"))
    }, [])


  return (
    <div>{store.store}</div>
  )
}
