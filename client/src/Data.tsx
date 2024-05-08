import { LuHome , LuUser } from "react-icons/lu";
import {  FiBox, FiLayers  } from "react-icons/fi";



const navLinks =[
    {
        name:"Dashboard",
        link:"/dashboard",
        icon:<LuHome/>
    },
    {
        name:"View Stores",
        link:"/store",
        icon:<FiBox />
    },
    {
        name:"Analytics",
        link:"/analytics",
        icon:<FiLayers />
    },
]



const userlinks =[
    {
        name:"Profile",
        link:"/profile",
        icon:<LuUser/>
    }
]


// const storeInputs = [
//     {"name":"store_name" , "type":"text" , "label":"Store Name" , "placeholder":"Enter Store Name"},
// ]



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
    




export {navLinks , userlinks,signupFields, SignInfields}