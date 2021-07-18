import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { setShowSidebar } from "../context/globalActions";

export default function Appbar() {
  const [{ isShowSidebar }, dispatch] = useContext(GlobalContext);

  const toggleSidebar = () => {
    dispatch(setShowSidebar(!isShowSidebar));
  };

  return (
    <div className="row bg-primary h-100">
      <div className="col-2 p-2">
        // TODO: use drawer icon
        <button
          className="btn btn-sm btn-outline-light w-100"
          onClick={toggleSidebar}
        >
          toggle-sidebar
        </button>
      </div>
    </div>
  );
}
