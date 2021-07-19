import React from "react";
import { useHistory } from "react-router-dom";

export default function CityFilter({ cities }) {
  const history = useHistory();

  return (
    <div className="my-2">
      <div className="fw-bold mb-2">Filter by city:</div>
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
  );
}
