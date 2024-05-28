import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginScreen /> */}
    <RegisterScreen />
  </React.StrictMode>
);
