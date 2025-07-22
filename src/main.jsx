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
import AdminPage from './page/AdminPage.jsx';
import RolePage from './page/RolePage.jsx';
import ActionPage from './page/ActionPage.jsx';
import FloorPage from './page/FloorPage.jsx';
import TablePage from './page/TablePage.jsx';
import ReservationPage from './page/ReservationPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/> ,
    // errorElement: <ErrorPage/>,
    children: [
      // Trang admin
      {
        path: "/admin",
        element:  <AdminPage/> ,
        // Các thành phần của trang admin
        children: [
          { 
            index: true, 
            element: <h1>Trang Chủ</h1>
          },
          {
            path: "category",
            element: <CategoryPage/> ,
          },
          {
            path: "brand",
            element: <BrandPage/>,
          },
          {
            path: "product",
            element: <ProductPage/>,
          },
          {
            path: "staff",
            element: <StaffPage/>
          },
          {
            path: "role",
            element: <RolePage/>
          },
          {
            path: "action",
            element: <ActionPage/>
          },
          {
            path: "floor",
            element: <FloorPage/>
          },
          {
            path: 'table',
            element: <TablePage/>
          },
          {
            path: 'reservation',
            element: <ReservationPage/>
          }
        ]
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
