import React from "react";
import { useParams } from "react-router-dom";
import useFetchTable from "../hooks/useFetchTable";
import useFetchRow from "../hooks/useFetchRow";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

import useFetchRelationships from "../hooks/useFetchRelationships";

export default function BranchDetail() {
  const { BranchId } = useParams();
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
              <h5>Back to home</h5>
            </Link>
          </div>
        </div>
        <div className="row">
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
