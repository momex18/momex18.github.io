import React from "react";
import Home from "./pages/Home";
import CardFunc from "./pages/Card";
import Art from "./pages/Art";
import Credits from "./pages/Credits";

const routes = {
  "/": () => <Home />,
  "/Card": () => <CardFunc />,
  "/Art": () => <Art />,
  "/Credits": () => <Credits />
};

export default routes;