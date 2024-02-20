import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import router from "./router";

function RouteElement() {
  const element = useRoutes(router);
  return element;
}
function App() {
  return (
    <BrowserRouter>
      <RouteElement />
    </BrowserRouter>
  );
}

export default App;
