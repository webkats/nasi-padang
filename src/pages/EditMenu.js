import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import useFetchRow from "../hooks/useFetchRow";
import useFetchTable from "../hooks/useFetchTable";
import useEditRelation from "../hooks/useEditRelation";
import useFetchRelationships from "../hooks/useFetchRelationships";

export default function EditMenu() {
  const { BranchId } = useParams();

  const [menus, menuStatus] = useFetchTable("allMenu", {});
  const [branch, branchStatus] = useFetchRow("allBranch", BranchId);

  const [branchMenus] = useFetchRelationships(
    "allBranch",
    BranchId,
    "menu",
    {}
  );

  const [listedItems, setListedItems] = useState([]);
  const [unlistedItems, setUnlistedItems] = useState([]);

  const [handleAddRelation, handleDeleteRelation] = useEditRelation(
    "allBranch",
    BranchId
  );

  useEffect(() => {
    if (branchMenus) {
      setListedItems(
        branchMenus.map((elem) => {
          const { id, name } = elem;
          return { id, name };
        })
      );
    }
    // eslint-disable-next-line
  }, [branchMenus]);

  useEffect(() => {
    if (branchMenus && menuStatus === "success") {
      setUnlistedItems(
        menus
          .filter((menu) => {
            return !branchMenus.find((elem) => {
              return elem.name === menu.name;
            });
          })
          .map((menu) => {
            const { id, name } = menu;
            return { id, name };
          })
      );
    }
    // eslint-disable-next-line
  }, [branchMenus, menuStatus]);

  const handleAdd = async (menu) => {
    await handleAddRelation("menu", menu.id);
    setListedItems([...listedItems, menu]);
    setUnlistedItems([...unlistedItems.filter((item) => item.id !== menu.id)]);
  };

  const handleRemove = async (menu) => {
    await handleDeleteRelation("menu", menu.id);
    setUnlistedItems([...unlistedItems, menu]);
    setListedItems([...listedItems.filter((item) => item.id !== menu.id)]);
  };

  if (
    branchMenus &&
    menuStatus === "success" &&
    branchStatus === "success" &&
    branch.city
  ) {
    // console.log(branch);
    const { name } = branch;
    const { displayField: city } = branch.city;

    return (
      <>
        <div className="row my-2 mb-3">
          <div className="col-12">
            <h3>
              {name}, {city}
            </h3>
          </div>
          <div className="col-12">
            <Link to={`/`}>
              <h5>back to home</h5>
            </Link>
          </div>
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
                {unlistedItems.map((menu) => {
                  return (
                    <li key={menu.id} className="list-group-item">
                      <button
                        className="btn-sm btn-success mx-2"
                        onClick={() => handleAdd(menu)}
                      >
                        add
                      </button>
                      {menu.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-5 mx-auto p-3 border">
            <div className="text-center mb-3">
              <span className="fw-bold">Listed Branch Menu</span>
            </div>
            <div className="card">
              <ul className="list-group list-group-flush">
                {listedItems.map((menu) => {
                  return (
                    <li key={menu.id} className="list-group-item">
                      <button
                        className="btn-sm btn-danger mx-2"
                        onClick={() => handleRemove(menu)}
                      >
                        remove
                      </button>
                      {menu.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-success w-50" onClick={handleUpdate}>
              Update Menu
            </button>
          </div>
        </div> */}
      </>
    );
  }

  return <div>Loading...</div>;
}
