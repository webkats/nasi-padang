import React, { useContext } from "react";
import AdminPanelContext from "../context/AdminPanelContext";

export default function AdminPanelItem({ text, modalContent }) {
  const { setShowModal, setModalContent } = useContext(AdminPanelContext);

  return (
    <li
      type="button"
      className="list-group-item"
      onClick={() => {
        setShowModal(true);
        setModalContent(modalContent);
      }}
    >
      {text}
    </li>
  );
}
