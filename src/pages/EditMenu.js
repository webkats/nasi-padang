import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import useFetchRow from "../hooks/useFetchRow";
import useFetchTable from "../hooks/useFetchTable";

export default function EditMenu() {
  const { BranchId } = useParams();

  const [branch, branchStatus] = useFetchRow("allBranch", BranchId);
  const [menus, menuStatus] = useFetchTable("allMenu", {});

  if (branchStatus === "success" && menuStatus === "success") {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <Link to={`/branches/${BranchId}`}>
              <h5>back to branch detail</h5>
            </Link>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-6 border">
            {branch.menu.nodes.map((elem) => {
              return <div>{elem.displayField}</div>;
            })}
          </div>
          <div className="col-6 border">
            {menus
              .filter((menu) => {
                return !branch.menu.nodes.find((elem) => {
                  return elem.displayField === menu.name;
                });
              })
              .map((menu) => {
                return <div>{menu.name}</div>;
              })}
          </div>
        </div>
      </>
    );
  }

  return <div>Loading...</div>;
}
