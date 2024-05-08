import axios from "axios";
import { toast } from "sonner";

async function getData(url :any) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}${url}`);
       
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again later.");
        return "error"; 
    }
}

export { getData };
