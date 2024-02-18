import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import blob from '../../../assets/blob.svg'

export default function Signin() {

  const fields = [
    {
      id: 'email',
      name: 'Email',
      type: 'email',
      placeholder: 'eg: example@example.com',
    },
    {
      id: 'password',
      name: 'Password',
      type: 'password',
      placeholder: '**********',
    }
  ];
  const error = null

  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <div className='lg:w-[60vw] lg:h-[80vh] w-[80vw] flex justify-center items-center shadow-lg bg-white rounded-xl max-lg:flex-col'>
        <div className='lg:w-1/3 flex justify-center bg-primary md:h-[100%] rounded-xl  shadow-2xl h-[10%] w-full'>
            
        </div>


        <div className='lg:w-2/3 flex justify-center items-center h-[100%] p-5 w-full'>
          <div className='w-[80%] max-md:w-full'>
            <h3 className='font-semibold text-4xl lg:mb-10 max-sm:text-3xl text-center mb-5'>Sign Into Your Account</h3>

            {
              error ? (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3' role='alert'>
                  <span className='block sm:inline'>{error}</span>
                </div>
              ) : null
            }
            <form>
              {fields.map((field) => (
                <Input
                  key={field.id} // Ensure each input has a unique key
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              ))}
                <Button name={"Countinue"} type={"submit"} onClick={null} customClass={"mb-5  gradient gradient-hover "}/>
                <p className='text-center '>Don't have an account? <a href='/signup' className='link'>SignUp</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

