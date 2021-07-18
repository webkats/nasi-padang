import React from "react";
import { Link } from "react-router-dom";

export default function BranchCard({ branch }) {
  const { name } = branch;
  const { displayField: city } = branch.city;

  return (
    <div className="col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{city}</h6>
          <Link to={`/branches/${branch.id}`} className="card-link">
            GET MENU
          </Link>
        </div>
      </div>
    </div>
  );
}
