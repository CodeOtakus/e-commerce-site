import {  useLayoutEffect } from "react"
import Axios from "axios"


export default function Store() {
    let id = "5507e890-b307-4529-a06c-d57d3cf323e0"

    useLayoutEffect(() => {
        Axios.get(import.meta.env.VITE_API_URL + `/store/${id}/all`)
        .then(res => {
        console.log(res.data)
        })
    }, [])


  return (
    <div>Store</div>
  )
}
