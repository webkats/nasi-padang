import React, { useContext, useEffect, useState } from "react";
import useInsertRow from "../../hooks/useInsertRow";
import AdminPanelContext from "../../context/AdminPanelContext";
// import useEditRelation from "../../hooks/useEditRelation";
// import useFetchTable from "../../hooks/useFetchTable";

// FIXME: ADD RELATION AFTER CREATE
export default function AddMenu() {
  const { setShowModal } = useContext(AdminPanelContext);
  const [insertRow, status] = useInsertRow("allMenu");
  // const [handleAddRelation] = useEditRelation('allMenu',)

  const [input, setInput] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "makanan",
  });

  useEffect(() => {
    // console.log(status);
    if (status === "success") setShowModal(false);
    // eslint-disable-next-line
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const { name, price, imageUrl, category } = input;
    // await insertRow({
    //   name,
    //   imageUrl,
    //   price: +price,
    // });
  };

  // TODO:
  return <div>...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Add New Menu</h3>
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">category</label>
        <select name="category" className="form-select">
          <option value="makanan">makanan</option>
          <option value="minuman">minuman</option>
          <option value="tambahan">tambahan</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
