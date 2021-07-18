import React, { useEffect, useState } from "react";
import AdminLoginModal from "./AdminLoginModal";

export default function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.isLoggedIn === "true") setIsLoggedIn(true);
  }, []);

  const handleToggleModal = () => setShowModal(!showModal);

  const handleLogout = () => {
    localStorage.isLoggedIn = false;
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button
          className="btn btn-primary w-100 p-2"
          onClick={handleToggleModal}
        >
          Admin Login
        </button>
      ) : (
        <button className="btn btn-danger w-100 p-2" onClick={handleLogout}>
          Logout
        </button>
      )}

      <AdminLoginModal
        showModal={showModal}
        setShowModal={setShowModal}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}
