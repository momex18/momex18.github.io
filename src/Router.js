import React from "react";
import App from "./App";
import Valentine from './pages/Valentine/Valentine';

const routes = {
  "/": () => <Valentine />,
  "/TheLavenderWitch": () => <App />,
  "/Card": () => <App />,
  "/Art": () => <App />,
  "/Credits": () => <App />,
  "/Home": () => <App />,
};

export default routes;