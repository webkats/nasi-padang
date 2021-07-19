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
    <div className="row bg-primary h-100 py-2">
      <div className="col-2 text-start h-100">
        {/* TODO: use drawer icon */}
        <button
          className="btn btn-sm btn-outline-light bg-light h-100"
          onClick={toggleSidebar}
        >
          <img src={NavDrawer} alt="nav-drawer" />
        </button>
      </div>
    </div>
  );
}
