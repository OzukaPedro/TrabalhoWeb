import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginScreen from "./screens/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import Dashboard from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
