import React, { useState, useContext, useEffect } from "react";
import useInsertRow from "../../hooks/useInsertRow";
import AdminPanelContext from "../../context/AdminPanelContext";
import useFetchTable from "../../hooks/useFetchTable";
import useCreateRelation from "../../hooks/useCreateRelation";
import DataContext from "../../context/dataContext";
import { useHistory } from "react-router-dom";

export default function AddBranch() {
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    city: "",
  });
  const [insertRow] = useInsertRow("allBranch");
  const { setShowModal } = useContext(AdminPanelContext);

  const [cities, status] = useFetchTable("allCity", {});
  const [createRelation] = useCreateRelation();

  const [, revalidateBranches] = useContext(DataContext).branchesState;

  useEffect(() => {
    if (status === "success") {
      setInput({
        ...input,
        city: cities[0].name,
      });
    }
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
    event.preventDefault();
    // console.log(input);
    const { name, city } = input;
    const result = await insertRow({ name });
    const targetCity = cities.find((elem) => elem.name === city);

    await createRelation({
      slug: "allBranch",
      RowId: result.id,
      targetCol: "city",
      RowRef: targetCity.id,
    });

    await revalidateBranches();

    setShowModal(false);
    history.push(`/branches/${result.id}/edit-menu`);
  };

  if (status === "success")
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add New Branch</h3>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">city</label>
          <select name="city" className="form-select" onChange={handleChange}>
            {cities.map((city) => {
              return (
                <option key={city.id} value={city.name}>
                  {city.name}
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

  return <div>Loading...</div>;
}
