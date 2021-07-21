import React, { useContext, useEffect, useState } from "react";
import useInsertRow from "../../hooks/useInsertRow";
import AdminPanelContext from "../../context/AdminPanelContext";
import useFetchTable from "../../hooks/useFetchTable";
import useCreateRelation from "../../hooks/useCreateRelation";

// FIXME: ADD RELATION AFTER CREATE
export default function AddMenu() {
  const { setShowModal } = useContext(AdminPanelContext);
  const [insertRow] = useInsertRow("allMenu");
  const [categories, categoriesStatus] = useFetchTable("allCategory", {});
  const [createRelation] = useCreateRelation();

  const [input, setInput] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  useEffect(() => {
    if (categoriesStatus === "success") {
      setInput({
        ...input,
        category: categories[0].name,
      });
    }
    // eslint-disable-next-line
  }, [categoriesStatus]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, price, imageUrl, category } = input;
    const result = await insertRow({
      name,
      imageUrl,
      price: +price,
    });
    const foundCategory = categories.find((elem) => elem.name === category);
    const { id: CategoryId } = foundCategory;

    await createRelation({
      slug: "allCategory",
      // tableName: "category",
      RowId: CategoryId,
      targetCol: "menu",
      RowRef: result.id,
    });

    setShowModal(false);
  };

  if (categoriesStatus === "success") {
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
          <select
            name="category"
            className="form-select"
            onChange={handleChange}
          >
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  return <div>Loading...</div>;
}
