import { useEffect,useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Layout() {
  const [ user,setUser] = useState<any>(null);
  const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("User");
        if (storedUser) {
            setUser(storedUser);
        }
        else{
          navigate("/login");
        }
    }, [navigate]);
    console.log(user)
  return (
    <div>
      <Navbar />
      <Outlet  />
    </div>
  );
}
