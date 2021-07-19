import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { setShowSidebar } from "../context/globalActions";
import NavDrawer from "../assets/nav-drawer.svg";

export default function Appbar() {
  const [{ isShowSidebar }, dispatch] = useContext(GlobalContext);

  const toggleSidebar = () => {
    dispatch(setShowSidebar(!isShowSidebar));
  };

  return (
    <div className="row bg-primary h-100">
      <div className="col-2 p-2 text-start">
        {/* TODO: use drawer icon */}
        <button
          className="btn btn-sm btn-outline-light bg-light"
          onClick={toggleSidebar}
        >
          <img src={NavDrawer} alt="nav-drawer" />
        </button>
      </div>
    </div>
  );
}
