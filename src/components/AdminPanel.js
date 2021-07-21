import React, { useState } from "react";
import Modal from "./Modal";
import AdminPanelItem from "./AdminPanelItem";
import AdminPanelContext from "../context/AdminPanelContext";
import useRenderFormSwitch from "../hooks/useRenderFormSwitch";

export default function AdminPanel() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [renderForm] = useRenderFormSwitch();

  return (
    <>
      <AdminPanelContext.Provider value={{ setShowModal, setModalContent }}>
        <div className="card my-2">
          <ul className="list-group lismodalContent-group-flush">
            <li className="list-group-item text-center fw-bold">Admin Panel</li>
            <AdminPanelItem text="Add new menu" modalContent="AddMenu" />
            <AdminPanelItem text="Add new branch" modalContent={"AddBranch"} />
            <AdminPanelItem text="Add new city" modalContent={"AddCity"} />
            {/* TODO: EDIT/DELETE ROWS */}
            {/* <AdminPanelItem text="Edit/Delete menu" modalContent={"123"} />
            <AdminPanelItem text="Edit/Delete branch" modalContent={"123"} />
            <AdminPanelItem text="Edit/Delete city" modalContent={"123"} /> */}
          </ul>
        </div>

        <Modal showModal={showModal} setShowModal={setShowModal}>
          {modalContent && renderForm(modalContent)}
        </Modal>
      </AdminPanelContext.Provider>
    </>
  );
}
