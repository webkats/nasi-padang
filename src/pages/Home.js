import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";

export default function Home() {
  const [branches] = useFetchTable("allBranch", {});

  return (
    <div className="row g-2">
      {branches.map((branch) => {
        return <BranchCard key={branch.id} branch={branch} />;
      })}
    </div>
  );
}
