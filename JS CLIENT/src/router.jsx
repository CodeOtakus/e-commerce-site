import { lazy , Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Signin from './view/pages/auth/Signin';
import Signup from './view/pages/auth/Signup'
import Default_layout from './view/layouts/Default_layout';
import Dashboard from './view/pages/Dashboard';




const router = createBrowserRouter([
       {
        path: '/signin',
        element: <Signin />,
       },

       {
        path: '/signup',
        element: <Signup />,
       },

      {
        path:"/",
        element:<Default_layout />,
        children:[
          {
            path:"/dashboard",
            element: <Dashboard />
          },
          {
            path:"/stores",
            element: <h1>Stores</h1>
          }
        ] 
      }
  ]);

export default router;