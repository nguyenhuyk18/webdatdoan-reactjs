import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx';
import CategoryPage from './page/CategoryPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BrandPage from './page/BrandPage.jsx';
import ProductPage from './page/ProductPage.jsx';
import StaffPage from './page/StaffPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/> ,
    // errorElement: <ErrorPage/>,
    children: [
      { 
        index: true, 
        element: <h1>Trang Chủ</h1>
      },
      {
        path: "/category",
        element: <CategoryPage/> ,
      },
      {
        path: "/brand",
        element: <BrandPage/>,
      },
      {
        path: "/product",
        element: <ProductPage/>,
      },
      {
        path: "/staff",
        element: <StaffPage/>
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
