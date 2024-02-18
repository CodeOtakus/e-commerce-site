import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        address: "",
        country: "",
        city: "",
        mobile: "",
    });
    const [error, setError] = useState(null);
    const [id, setId] = useState(0);

    const fields = [
      {
        id: 'name',
        name: 'Name',
        type: 'text',
        placeholder: 'eg: John Doe',
      },
      {
        id: 'username',
        name: 'Username',
        type: 'text',
        placeholder: 'eg: JohnDoe1',
      },
      {
        id: 'email',
        name: 'Email',
        type: 'email',
        placeholder: 'eg: johndoe@example.com',
      },
      {
        id: 'password',
        name: 'Password',
        type: 'password',
        placeholder: '**********',
      },
      {
        id: 'confirmPassword',
        name: 'Confirm Password',
        type: 'password',
        placeholder: '**********',
      },
      
      {
        id: 'address',
        name: 'Address',
        type: 'text',
        placeholder: 'eg: Usa, Chigago 7th avenue',
      },
      {
        id: 'country',
        name: 'Country',
        type: 'text',
        placeholder: 'eg: USA',
      },
      {
        id: 'city',
        name: 'City',
        type: 'text',
        placeholder: 'eg: Chicago',
      },
      {
        id: 'mobile',
        name: 'Mobile',
        type: 'text',
        placeholder: 'eg: 0532460281',
      },
    ]
    
    const handleNext = (e) => {
      e.preventDefault()
        // Validate the form fields before proceeding
        const currentField = fields[id];
        if (!formData[currentField.id]) {
            setError(`Please fill in ${currentField.name}`);
            return;
        }

        setError(null);
        if (id < fields.length - 1) {
            setId(id + 1);
        } else {
            // Proceed with form submission
            console.log("Form data:", formData);
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
        console.log(formData)
    };

    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <div className='lg:w-[60vw] lg:h-[80vh] w-[80vw] flex justify-center items-center shadow-lg bg-white rounded-xl max-lg:flex-col'>
                <div className='lg:w-1/3 flex justify-center bg-primary md:h-[100%] rounded-xl  shadow-2xl h-[10%] w-full'>
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
                                  <label htmlFor={fields[id].id} className='mb-1'>
                                      <span className="input-label">
                                          {fields[id].name}
                                      </span>
                                  </label>
                                  <input
                                    type={fields[id].type}
                                    name={fields[id].id}
                                    value={formData[fields[id].id]}
                                    placeholder={fields[id].placeholder}
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
                                    name={`${id === fields.length - 1 ? "Sign Up" : "Next"}`}
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
                                fields.map((field, key) => {
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
