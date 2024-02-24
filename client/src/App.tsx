import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import('./views/layouts/Layout'));
const Page = lazy(() => import('./views/layouts/Page'));
const Dashboard = lazy(() => import('./views/pages/Dashboard'));
const Store = lazy(() => import('./views/pages/storePages/Store'));
const AddStore = lazy(() => import('./views/pages/storePages/AddStore'));

function App() {
  return (
    <Suspense fallback={<Page page={"loading ...."} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to ="/dashboard" />}  />
          <Route path="/dashboard" element={<Page page={<Dashboard />} />} />
          <Route path="/store" element={<Page page={<Store />} />} />
          <Route path="/store/add" element={<Page page={<AddStore />} />} />
          <Route path="/category" element={<Page page={"Category"} />} />
          <Route path="/products" element={<Page page={"Products"} />} />
          <Route path="*" element={<Page page={"Not found"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
