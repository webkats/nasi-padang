import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/globalContext";

export default function BranchCard({ branch }) {
  const { name } = branch;
  const { displayField: city } = branch.city;

  const [{ isLoggedIn }] = useContext(GlobalContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{city}</h6>
          <div>
            <Link to={`/branches/${branch.id}`} className="card-link">
              View Menu
            </Link>
          </div>
          <div>
            {isLoggedIn && (
              <Link
                to={`/branches/${branch.id}/edit-menu`}
                className="card-link"
              >
                Edit Menu
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
