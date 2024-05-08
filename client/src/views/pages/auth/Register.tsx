import { useState,useEffect } from 'react';
import Button from '../../components/Button.js';
import { signupFields } from '../../../Data.js';
import  axios  from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    const navigate = useNavigate();
    useEffect(()=>{
        const user = localStorage.getItem("User");
        if(user){
            navigate("/");
        }
    
    },[navigate])

    
    const [formData, setFormData] = useState <any>({
        name: "",
        email: "",
        password: "",
        username: "",
        address: "",
        country: "",
        city: "",
        mobile: "",
        postal_code:""
    });
    const [error, setError] = useState("");
    const [id, setId] = useState(0);

    
    
    const handleNext = (e:any) => {
      e.preventDefault()
        const currentField = signupFields[id];
        if (!formData[currentField.id]) {
            setError(`Please fill in ${currentField.name}`);
            return;
        }

        setError("");
        if (id < signupFields.length - 1) {
            setId(id + 1);
        } else {
          axios.post(`${import.meta.env.VITE_API_URL}/user/register`, formData)
              .then((response) => {
                localStorage.setItem("User",  JSON.stringify(response.data.user));
                toast.success(response.data.message);

                navigate("/")
               

              })
              .catch(function (error) {
                if (error.response) {
                
                  setError(error.response.data.errors);
                 
                }
              });
        }
    };


    const handlePrev = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
        if (id > 0) {
            setId(id - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <div className='lg:w-[60vw] lg:h-[80vh] w-[80vw] flex justify-center items-center bg-white rounded-xl max-lg:flex-col shadow-2xl '>
               

                <div className='lg:w-2/3 flex justify-center items-center h-[100%] p-5 w-full'>
                    <div className='w-[80%] max-md:w-full'>
                        <h3 className='font-semibold text-4xl lg:mb-10 max-sm:text-3xl text-center mb-5'>Create an Account</h3>

                        {error && (
                            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3 transition-all duration-500' role='alert'>
                                <span className='block sm:inline'>{error}</span>
                            </div>
                        )}
                        <form>
                            <div className=''>
                                <div className='flex flex-col w-full'>
                                  <label htmlFor={signupFields[id].id} className='mb-1'>
                                      <span className="input-label capitalize">
                                          {signupFields[id].name}
                                      </span>
                                  </label>
                                  <input
                                    type={signupFields[id].type}
                                    name={signupFields[id].id}
                                    value={formData[signupFields[id].id]}
                                    placeholder={signupFields[id].placeholder}
                                    className='input'
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                            </div>

                            <div className='flex space-x-4'>
                                <Button
                                    name={"Prev"}
                                    onClick={handlePrev}
                                    customClass={`transition-all duration-500 ${id === 0 ? 'pointer-events-none bg-gray-400' : 'bg-orange-500'}`}
                                />
                                <Button
                                    name={`${id === signupFields.length - 1 ? "Sign Up" : "Next"}`}
                                    onClick={handleNext}
                                    customClass={"bg-orange-500 transition-all duration-500"}
                                />
                            </div>

                            <div>
                              <p className='text-center mt-4'>Already have an account? <a className='link' href='/login'>LogIn</a></p>
                            </div>

                            <div className='mt-10'>
                              
                                  <p className='text-center mt-4'>By signing up, you agree to our <a className='link' href='/terms'>Terms of Service</a> and <a className='link' href='/privacy'>Privacy Policy</a></p>
                                
                            </div>

                            <div className='flex space-x-1 text-center justify-center relative bottom-0 mt-5 lg:mt-10 p-3'>
                              {
                                signupFields.map((_, key) => {
                                  return (
                                    <div className={`w-2 h-2 lg:w-3 lg:h-3  transition-all duration-500 rounded-full shadow-lg ${key === id ? "bg-orange-500" : "bg-gray-300"}`}></div>
                                   );
                                  })
                              }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
