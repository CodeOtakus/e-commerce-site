import React from 'react';

export default function Input({ formData, setFormData, name, type, placeholder }) {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={name} className='mb-1'>
          <span className="input-label ">
              {name}
          </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='input'
        required
      />
    </div>
  );
}

