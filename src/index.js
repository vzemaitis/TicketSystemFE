import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import NavigationBar from "./components/Layout/navigation-bar/MainNavigationBar";

ReactDOM.render(
  <BrowserRouter>
    <NavigationBar>
      <App />
    </NavigationBar>
  </BrowserRouter>,
  document.getElementById("root")
);
