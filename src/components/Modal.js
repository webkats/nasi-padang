import React from "react";
import { createPortal } from "react-dom";
import "../assets/css/modal.css";

export default function Modal({ children, showModal, setShowModal }) {
  if (showModal) {
    return createPortal(
      <div className="c-modal" onClick={() => setShowModal(false)}>
        <div
          className="c-modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <p className="w-75 mx-auto text-center display-5">Admin Login</p>

          {children}
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }

  return null;
}
