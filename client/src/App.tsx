import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, createContext, useState } from "react";

const Layout = lazy(() => import('./views/layouts/Layout'));
const Page = lazy(() => import('./views/layouts/Page'));
const Dashboard = lazy(() => import('./views/pages/Dashboard'));
const Store = lazy(() => import('./views/pages/storePages/Store'));
const AddStore = lazy(() => import('./views/pages/storePages/Add'));
const ViewStore = lazy(() => import('./views/pages/storePages/ViewStore'));
const EditStore = lazy(() => import('./views/pages/storePages/Edit'));
const User = lazy(() => import('./views/pages/user/UserProfile'));

import Loading from './views/pages/Loading';
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";

type NavContent = {
  showNavBar: boolean
  setShowNavBar:(c: boolean) => void
}
export const NavContext = createContext<NavContent>({
  showNavBar: true,
  setShowNavBar:()=>{}
});

function App() {
  const [showNavBar, setShowNavBar] = useState<any>(false);

  return (
    <NavContext.Provider value={{ showNavBar, setShowNavBar }}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Page page={<Dashboard />} />} />
            <Route path="/store" element={<Page page={<Store />} />} />
            <Route path="/store/add" element={<Page page={<AddStore />} />} />
            <Route path="/store/edit/:id" element={<Page page={<EditStore />} />} />
            <Route path="/store/:id" element={<Page page={<ViewStore />} />} />
            <Route path="/analytics" element={<Page page={"Analytics"} />} />
            <Route path="/profile" element={<Page page={<User />} />} />
            <Route path="*" element={ <Page page={"Not found"}/>}/>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </NavContext.Provider>
  );
}

export default App;
