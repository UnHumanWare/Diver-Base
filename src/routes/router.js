
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../global/Pages/Home";
import About from "../global/Pages/About";
import Locations from "../global/Pages/Locations";
import Register from "../global/Pages/Register";
import Login from "../global/Pages/Login";
import { MapPage } from "../global/components/Map";
import { QuoteRequest } from "../global/Pages/QuoteRequest";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />, 

        children: [
            {
                index: true,
                element: <Home />
            },
            {
              path: "about",
               element: <About />
            },
            {
                path: "locations",
                element: <Locations />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "Map",
                element: <MapPage />
            },
            {
                path: "QuoteRequest",
                element: <QuoteRequest />
            }
        ]


    }
])

export default router;
