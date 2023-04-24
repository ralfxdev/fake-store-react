import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './AppRoutes.css'
import { AllProducts } from './pages/AllProducts'
import { Product } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "*",
    element: <h1>NOT FOUND! ERROR 404 T-T</h1> ,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
