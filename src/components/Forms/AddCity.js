import React, { useState, useContext } from "react";
import useInsertRow from "../../hooks/useInsertRow";
import AdminPanelContext from "../../context/AdminPanelContext";

export default function AddCity() {
  const [name, setName] = useState("");
  const [insertRow] = useInsertRow("allCity");
  const { setShowModal } = useContext(AdminPanelContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(name);
    await insertRow({ name });
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Add New City</h3>
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
