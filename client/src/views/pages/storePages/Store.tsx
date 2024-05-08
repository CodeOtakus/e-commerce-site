import { useEffect , useState} from "react"
import { Link } from "react-router-dom"
import { getData } from "../../../utils/GetData"
import Empty from "../Empty"
import StoreDisplay from "../../components/StoreDisplay"
import { useNavigate } from "react-router-dom";

export default function Store() {
    const [id, setId] = useState<string>();
    const navigate = useNavigate();
    const [user, setUser] = useState<any>({userID:null});
    const [loading, setLoading] = useState<boolean>(true);
    const [store, setStore] = useState<any>([]);

    console.log(user)
    useEffect(() => {
        const User = localStorage.getItem("User");
        if(User){
        
        const parsedUser = JSON.parse(User);
        setUser(parsedUser);
        setId(parsedUser.userID);
        }
        else{
            navigate("/login");
        }

    }, [])

    useEffect(() => {
        setLoading(true); // Set loading to true when starting data fetch

        getData("/store/" + id + "/all")
            .then((res) => {
                console.log(res.store)
                if (res.store) {
                    setStore(res.store);
                } else {
                    console.log("error" + res);
                }
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching is completed
            });
    }, [id]); // Include id as a dependency to re-fetch data whenever it changes

    return (
        <div>
            <div className="flex w-full justify-between">
                <h1 className="text-3xl max-md:text-2xl font-semibold ">Store</h1>
                
                <Link to="/store/add">
                    <button className={`p-2 text-white bg-orange-500 shadow-lg rounded-md md:w-[10rem] ${store.length > 0 ? "" : " animate-bounce"}`}>Add Store</button>
                </Link>
            </div>

            {loading ? (
                <div>Loading...</div> // Render a loading indicator while fetching data
            ) : store ? (
                <div className="w-full  justify-between flex mt-5  gap-3 flex-col">
                    <StoreDisplay store={store} />
                </div>
            ) : (
                <Empty item={"Store"} />
            )}
        </div>
    )
}
