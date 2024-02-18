import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './view/pages/Dashboard';
import Signin from './view/pages/auth/Signin';
import Signup from './view/pages/auth/Signup';

const router = createBrowserRouter([
    {
      path: "/",
      children:[
        {
            path: "/signin",
            element: <Signin />,
        },
        {
            path: "/signup",
            element: <Signup />,
        }
      ]
    },
  ]);

export default router;