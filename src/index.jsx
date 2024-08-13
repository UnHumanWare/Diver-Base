import React from "react";
import { createRoot } from 'react-dom/client';
import './global/css/index.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./global/components/Navbar";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Footer } from "./global/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';






function mountReact() {
    const rootEl = document.getElementById('root');
    const root = createRoot(rootEl);




    root.render(
        <React.StrictMode>
            <NavBar />
            <RouterProvider router={router} />
            <Footer />
        </React.StrictMode>
    );
}

mountReact();
