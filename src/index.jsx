import React from "react";
import { createRoot } from 'react-dom/client';
import './global/css/index.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./global/components/Navbar";
import 'bootstrap/dist/js/bootstrap.bundle.min';



function mountReact() {
    const rootEl = document.getElementById('root');
    const root = createRoot(rootEl);




    root.render(
        <React.StrictMode>
            <NavBar />
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

mountReact();
