import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchTable from "../hooks/useFetchTable";
import useFetchRow from "../hooks/useFetchRow";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import useFetchRelationships from "../hooks/useFetchRelationships";
import GlobalContext from "../context/globalContext";

export default function BranchDetail() {
  const { BranchId } = useParams();
  const [{ isLoggedIn }] = useContext(GlobalContext);

  const [branch, branchStatus] = useFetchRow("allBranch", BranchId);
  const [categories, categoriesStatus] = useFetchTable("allCategory", {});

  const [branchMenus] = useFetchRelationships(
    "allBranch",
    BranchId,
    "menu",
    {}
  );

  if (
    branchMenus &&
    branchStatus === "success" &&
    categoriesStatus === "success"
  ) {
    const { name } = branch;
    const { displayField: city } = branch.city;

    return (
      <>
        <div className="row">
          <div className="col-12 text-center">
            <h3>
              Branch {name}, {city}
            </h3>
            <Link to="/">
              <h5>back to home</h5>
            </Link>
            {isLoggedIn && (
              <Link to={`/branches/${BranchId}/edit-menu`}>
                <h5>add and remove menu</h5>
              </Link>
            )}
          </div>
        </div>
        <div className="row g-2">
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                category={category}
                branchMenus={branchMenus}
              />
            );
          })}
        </div>
      </>
    );
  }

  return <div>Loading...</div>;
}
