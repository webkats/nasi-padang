import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";
import HomeLayout from "../components/HomeLayout";

// TODO: REFETCH CONTEXT

export default function Home() {
  const [branches, status] = useFetchTable("allBranch", {});

  return (
    <HomeLayout>
      {status === "success" ? (
        branches.map((branch) => {
          return <BranchCard key={branch.id} branch={branch} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </HomeLayout>
  );
}
