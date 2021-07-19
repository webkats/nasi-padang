import React from "react";
import Appbar from "./components/Appbar";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const appbarHeight = "3rem";

  return (
    <Router>
      <div
        className="container-fluid position-fixed"
        style={{ height: appbarHeight, zIndex: 2 }}
      >
        <Appbar />
      </div>
      <div
        className="container-fluid position-relative"
        style={{ top: appbarHeight }}
      >
        <Main />
      </div>
    </Router>
  );
}
