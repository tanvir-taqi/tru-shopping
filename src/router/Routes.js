import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Shop from "../pages/Shop/Shop";
import Orders from "../pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import OrderList from "../pages/Dashboard/OrderList";
import AddProducts from "../pages/Dashboard/AddProducts";
import MyProducts from "../pages/Dashboard/MyProducts";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/join',
                element: <Join></Join>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/orderlist',
                        element:<OrderList></OrderList>
                    },
                    {
                        path:'/dashboard/addproducts',
                        element:<AddProducts></AddProducts>
                    },
                    {
                        path:'/dashboard/myproducts',
                        element:<MyProducts></MyProducts>
                    }
                  
                ]
            },
           
        ]
    }
])