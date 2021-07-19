import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";
import { useParams } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";

export default function Home() {
  const { city } = useParams();
  const [branches, status] = useFetchTable("allBranch", {});

  return (
    <HomeLayout>
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
    </HomeLayout>
  );
}
