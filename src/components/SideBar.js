import React, { useState, useContext } from "react";
import Modal from "./Modal";
import AdminLoginForm from "./AdminLoginForm";

import GlobalContext from "../context/globalContext";
import { setLogin } from "../context/globalActions";

export default function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useContext(GlobalContext);
  const { isLoggedIn } = state;

  const handleLogout = () => {
    localStorage.isLoggedIn = false;
    dispatch(setLogin(false));
  };

  return (
    <div className="col-2 vh-100 position-fixed py-3 bg-dark">
      <div>
        {!isLoggedIn ? (
          <button
            className="btn btn-primary w-100 p-2"
            onClick={() => setShowModal(true)}
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
    </div>
  );
}
