import React, { useState, useRef } from 'react';
import Button from '../../components/Button';
import axios from 'axios';
import { SignInfields } from '../../../data';

function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState(null);

  function login(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios.post('http://localhost:8000/api/user/login', {
      email,
      password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      setError(error.response.data.message);
    });
  }

  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <div className='lg:w-[60vw] lg:h-[80vh] w-[80vw] flex justify-center items-center shadow-lg bg-white rounded-xl max-lg:flex-col'>
        <div className='lg:w-1/3 flex justify-center bg-primary md:h-[100%] rounded-xl  shadow-2xl h-[10%] w-full'></div>

        <div className='lg:w-2/3 flex justify-center items-center h-[100%] p-5 w-full'>
          <div className='w-[80%] max-md:w-full'>
            <h3 className='font-semibold text-4xl lg:mb-10 max-sm:text-3xl text-center mb-5'>Sign Into Your Account</h3>

            {error && (
              <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3' role='alert'>
                <span className='block sm:inline'>{error}</span>
              </div>
            )}

            <form onSubmit={login}>
              {SignInfields.map((field, key) => (
                <div key={key} className='flex flex-col w-full'>
                  <label htmlFor={field.name} className='mb-1'>
                    <span className="input-label">
                      {field.name}
                    </span>
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className='input'
                    ref={field.name === 'Email' ? emailRef : passwordRef}
                    required
                  />
                </div>
              ))}
              <Button name={"Continue"} type={"submit"} customClass={"mb-5 gradient gradient-hover"} />
              <p className='text-center'>Don't have an account? <a href='/signup' className='link'>SignUp</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
