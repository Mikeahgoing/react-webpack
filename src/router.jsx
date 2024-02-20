import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import React from "react";
const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
];
export default router;
