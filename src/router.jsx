import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/Home";
import React from "react";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
