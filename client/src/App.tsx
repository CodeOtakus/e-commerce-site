import { Route, Routes, } from "react-router-dom"
import { lazy , Suspense} from "react"

const Layout = lazy(() => import('./views/layouts/Layout'))
const Page = lazy(() => import('./views/pages/Page'))




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Page name={"Home"} />} />
          <Route path="/dashboard" element={<Page name={"dashboard"} />} />
          <Route path="/store" element={<Page name={"Store"} />} />
          <Route path="/category" element={<Page name={"Category"} />} />
          <Route path="/products" element={<Page  name={"Products"}/>} />
        </Route>
      </Routes>

    </>
    
  )
}

export default App