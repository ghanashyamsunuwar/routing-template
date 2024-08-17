import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./Web";
import Home from "../../ui/pages/Home";
import About from "../../ui/pages/About";
import Login from "../../ui/pages/Login";
import HomePage from "../../ui/pages/HomePage";
import Main from "../../ui/components/layout/Main";
export const router = createBrowserRouter([
    {
    path:webRoutes.homepage,
    element:<HomePage/>
    },
    {
        path:webRoutes.main,
        element:<Main/>,
        children:[
            {
                path:webRoutes.home,
                element:<Home/>
                },
                {
                path:webRoutes.about,
                element:<About/>
                },
                {
                path:webRoutes.login,
                element:<Login/>
                }
                
        ]
    }
  
])