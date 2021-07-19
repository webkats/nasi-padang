import React, { useState, useContext } from "react";
import Modal from "./Modal";
import AdminLoginForm from "./AdminLoginForm";
import GlobalContext from "../context/globalContext";
import { setLogin } from "../context/globalActions";
import useFetchTable from "../hooks/useFetchTable";
import { useHistory } from "react-router-dom";

// import "../assets/css/sidebar.css";

export default function SideBar() {
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useContext(GlobalContext);
  const { isLoggedIn } = state;

  const [cities, status] = useFetchTable("allCity", {});

  const handleLogout = () => {
    localStorage.isLoggedIn = false;
    dispatch(setLogin(false));
  };

  return (
    <div
      id="desktopSidebar"
      className="col-2 vh-100 position-fixed py-3 bg-dark text-light"
    >
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

      {status === "success" ? (
        <div className="my-3">
          <p className="fw-bold">Filter by city:</p>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li
                type="button"
                className="list-group-item"
                onClick={() => history.push("/")}
              >
                All
              </li>
              {cities.map((city) => {
                return (
                  <li
                    key={city.id}
                    type="button"
                    className="list-group-item"
                    onClick={() => history.push(`/${city.name}`)}
                  >
                    {city.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
