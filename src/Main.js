import React, { useContext } from "react";
import SideBar from "./components/SideBar";
import Router from "./components/Router";
import GlobalContext from "./context/globalContext";

export default function useMainContent() {
  const [{ isShowSidebar }] = useContext(GlobalContext);

  return (
    <div className="row">
      {isShowSidebar ? <SideBar /> : null}

      <div
        className={`my-3 px-5 ${isShowSidebar ? "col-10 offset-2" : "col-12"}`}
      >
        <Router />
      </div>
    </div>
  );
}
