import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import HomeTest from "./pages/Test/Test";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/t",
    element: <HomeTest />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
