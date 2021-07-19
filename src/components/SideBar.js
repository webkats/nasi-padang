import React, { useState, useContext } from "react";
import Modal from "./Modal";
import AdminLoginForm from "./AdminLoginForm";
import GlobalContext from "../context/globalContext";
import { setLogin } from "../context/globalActions";
import useFetchTable from "../hooks/useFetchTable";
import AdminPanel from "./AdminPanel";
import CityFilter from "./CityFilter";
import useQoreAuthenticationHttps from "../hooks/useQoreAuthenticationHttps";
// import "../assets/css/sidebar.css";

export default function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useContext(GlobalContext);
  const { isLoggedIn } = state;

  const [cities, status] = useFetchTable("allCity", {});

  const { handleLogout } = useQoreAuthenticationHttps(dispatch, setLogin);

  const handleLoginForm = () => {
    // FIXME:
    setShowModal(true);
  };

  return (
    <div
      id="desktopSidebar"
      className="col-2 vh-100 position-fixed py-3 bg-dark text-light overflow-auto"
    >
      <div>
        {!isLoggedIn ? (
          <button
            className="btn btn-primary w-100 p-2"
            onClick={handleLoginForm}
          >
            Admin Login
          </button>
        ) : (
          <>
            <div className="text-center text-light mb-2">
              Logged in as admin
            </div>
            <button className="btn btn-danger w-100 p-2" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        <Modal showModal={showModal} setShowModal={setShowModal}>
          <AdminLoginForm setShowModal={setShowModal} />
        </Modal>
      </div>

      {isLoggedIn && <AdminPanel />}

      {status === "success" && <CityFilter cities={cities} />}
    </div>
  );
}
