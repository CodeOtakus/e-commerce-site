import React, { useState } from 'react';
import Button from '../../components/Button';
import { Navigate } from 'react-router-dom';
import { signupFields } from '../../../data';
import  axios  from 'axios';


export default function Signup() {
    const [formData, setFormData] = useState({
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
    const [error, setError] = useState(null);
    const [id, setId] = useState(0);

    
    
    const handleNext = (e) => {
      e.preventDefault()
        // Validate the form signupFields before proceeding
        const currentField = signupFields[id];
        if (!formData[currentField.id]) {
            setError(`Please fill in ${currentField.name}`);
            return;
        }

        setError(null);
        if (id < signupFields.length - 1) {
            setId(id + 1);
        } else {
          axios.post('http://localhost:8000/api/user/register', formData)
              .then((response) => {
                  console.log(response.data);
              })
              .catch(function (error) {
                if (error.response) {
                
                  setError(error.response.data.errors);
                 
                }
              });
        }
    };


    const handlePrev = (e) => {
      e.preventDefault()
        if (id > 0) {
            setId(id - 1);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <div className='lg:w-[60vw] lg:h-[80vh] w-[80vw] flex justify-center items-center bg-black rounded-xl max-lg:flex-col shadow-2xl shadow-primary'>
                <div className='lg:w-1/3 justify-center bg-primary md:h-[100%] rounded-xl  shadow-2xl h-[10%] w-full hidden'>
                </div>

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
                                    className='input mb-3 '
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                            </div>

                            <div className='flex space-x-4'>
                                <Button
                                    name={"Prev"}
                                    onClick={handlePrev}
                                    customClass={`transition-all duration-500 ${id === 0 ? 'pointer-events-none bg-gray-400' : 'bg-primary'}`}
                                />
                                <Button
                                    name={`${id === signupFields.length - 1 ? "Sign Up" : "Next"}`}
                                    onClick={handleNext}
                                    customClass={"bg-primary transition-all duration-500"}
                                />
                            </div>

                            <div>
                              <p className='text-center mt-4'>Already have an account? <a className='link' href='/signin'>SignIn</a></p>
                            </div>

                            <div className='mt-10'>
                              
                                  <p className='text-center mt-4'>By signing up, you agree to our <a className='link' href='/terms'>Terms of Service</a> and <a className='link' href='/privacy'>Privacy Policy</a></p>
                                
                            </div>

                            <div className='flex space-x-1 text-center justify-center relative bottom-0 mt-5 lg:mt-10 p-3'>
                              {
                                signupFields.map((field, key) => {
                                  return (
                                    <div className={`w-2 h-2 lg:w-3 lg:h-3  transition-all duration-500 rounded-full shadow-lg ${key === id ? "bg-primary" : "bg-accent"}`}></div>
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
