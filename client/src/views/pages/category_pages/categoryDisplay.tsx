// import { useEffect, useState } from "react";
// import { getData } from "../../../utils/GetData";
// import { toast } from "sonner";



// type id ={
//   id:string
// }
// export default function CategoryDisplay({ id }:id) {
//   const [category, setCategory] = useState<any[]>( );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true); // Set loading to true when fetching new data
//     getData("/category/" + id + "/all")
//       .then((res) => {
//        setCategory(res.categories)
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching category:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>p</>
//   )
// }
