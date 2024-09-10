import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/page.jsx";
import Cart from "./pages/cart/page.jsx";
import Profile from "./pages/profile/page.jsx";
import Products from "./pages/products/page.jsx";
import Auth from "./pages/auth/page.jsx";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/products", element: <Products /> },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </React.StrictMode>
);
