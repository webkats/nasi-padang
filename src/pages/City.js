import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";
import { useParams } from "react-router-dom";

export default function Home() {
  const { city } = useParams();
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
          branches
            .filter((branch) => {
              return branch.city.displayField === city;
            })
            .map((branch) => {
              return <BranchCard key={branch.id} branch={branch} />;
            })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
