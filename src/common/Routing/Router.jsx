import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./Web";
import PageOne from "../../ui/pages/PageOne";
import PageTwo from "../../ui/pages/PageTwo";
import PageThree from "../../ui/pages/PageThree";
import HomePage from "../../ui/pages/HomePage";
export const router = createBrowserRouter([
    {
    path:webRoutes.home,
    element:<HomePage/>
    },
    {
    path:webRoutes.one,
    element:<PageOne/>
    },
    {
    path:webRoutes.two,
    element:<PageTwo/>
    },
    {
    path:webRoutes.three,
    element:<PageThree/>
    }
    
])