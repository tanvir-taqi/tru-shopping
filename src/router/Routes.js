import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Shop from "../pages/Shop/Shop";
import Orders from "../pages/Orders/Orders";





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
                element: <Orders></Orders>
            },
           
        ]
    }
])