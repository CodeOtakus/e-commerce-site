import React from 'react'

    const signupFields = [
        {
          id: 'name',
          name: 'name',
          type: 'text',
          placeholder: 'eg: John Doe',
        },
        {
          id: 'username',
          name: 'username',
          type: 'text',
          placeholder: 'eg: JohnDoe1',
        },
        {
          id: 'email',
          name: 'email',
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
          id: 'postal_code',
          name: 'postal_code',
          type: 'text',
          placeholder: '000000',
        },
        
        {
          id: 'address',
          name: 'address',
          type: 'text',
          placeholder: 'eg: Usa, Chigago 7th avenue',
        },
        {
          id: 'country',
          name: 'country',
          type: 'text',
          placeholder: 'eg: USA',
        },
        {
          id: 'city',
          name: 'city',
          type: 'text',
          placeholder: 'eg: Chicago',
        },
        {
          id: 'mobile',
          name: 'mobile',
          type: 'text',
          placeholder: 'eg: 0532460281',
        },
      ]


      const SignInfields = [
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
    


export {signupFields, SignInfields}
