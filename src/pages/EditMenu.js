import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import useFetchRow from "../hooks/useFetchRow";
import useFetchTable from "../hooks/useFetchTable";

export default function EditMenu() {
  const { BranchId } = useParams();

  const [branch, branchStatus] = useFetchRow("allBranch", BranchId);
  const [menus, menuStatus] = useFetchTable("allMenu", {});

  const [listedItems, setListedItems] = useState([]);
  const [unlistedItems, setUnlistedItems] = useState([]);

  useEffect(() => {
    if (branchStatus === "success") {
      setListedItems(
        branch.menu.nodes.map((elem) => {
          const { id, displayField } = elem;
          return { id, name: displayField };
        })
      );
    }
  }, [branchStatus]);

  useEffect(() => {
    if (menuStatus === "success") {
      setUnlistedItems(
        menus
          .filter((menu) => {
            return !branch.menu.nodes.find((elem) => {
              return elem.displayField === menu.name;
            });
          })
          .map((menu) => {
            const { id, name } = menu;
            return { id, name };
          })
      );
    }
  }, [menuStatus]);

  if (branchStatus === "success" && menuStatus === "success") {
    return (
      <>
        <div className="row my-2">
          <div className="col-12">
            <Link to={`/branches/${BranchId}`}>
              <h5>back to branch detail</h5>
            </Link>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-5 mx-auto p-3 border">
            <div className="text-center mb-3">
              <span className="fw-bold">Unlisted Menu</span>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                {menus
                  .filter((menu) => {
                    return !branch.menu.nodes.find((elem) => {
                      return elem.displayField === menu.name;
                    });
                  })
                  .map((menu) => {
                    return (
                      <li className="list-group-item">
                        <button className="btn-sm btn-success mx-2">add</button>

                        {menu.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="col-5 mx-auto p-3 border">
            <div className="text-center mb-3">
              <span className="fw-bold">Branch Menu List</span>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                {branch.menu.nodes.map((elem) => {
                  return (
                    <li className="list-group-item">
                      <button className="btn-sm btn-danger mx-2">remove</button>
                      {elem.displayField}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-success w-50">Update Menu</button>
          </div>
        </div>
      </>
    );
  }

  return <div>Loading...</div>;
}
