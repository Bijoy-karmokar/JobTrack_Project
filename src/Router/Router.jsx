import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
            }
        ]
    }
])
export default router;