import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";

export default function Home() {
  const [branches, status] = useFetchTable("allBranch", {});

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h1>Rumah Makan - Nasi Padang</h1>
        </div>
      </div>

      <div className="row g-2">
        <div className="col-12">
          <h4>Cabang:</h4>
        </div>

        {status === "success" ? (
          branches.map((branch) => {
            return <BranchCard key={branch.id} branch={branch} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
