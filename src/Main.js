import React, { useContext, useEffect } from "react";
import SideBar from "./components/SideBar";
import Router from "./components/Router";
import GlobalContext from "./context/globalContext";
import { setShowSidebar } from "./context/globalActions";

export default function useMainContent() {
  const [{ isShowSidebar }, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    if (window.innerWidth < 768) dispatch(setShowSidebar(false));
    window.addEventListener("resize", () => {
      dispatch(setShowSidebar(window.innerWidth < 768 ? false : true));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      {isShowSidebar && <SideBar />}
      <div
        className={`my-3 px-5 ${isShowSidebar ? "col-10 offset-2" : "col-12"}`}
      >
        <Router />
      </div>
    </div>
  );
}
