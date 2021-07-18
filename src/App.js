import React from "react";
import Appbar from "./components/Appbar";
import Main from "./Main";

export default function App() {
  const appbarHeight = "3rem";

  return (
    <>
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
    </>
  );
}
