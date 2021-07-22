import React, { useContext } from "react";
// import useFetchTable from "../hooks/useFetchTable";
import BranchCard from "../components/BranchCard";
import HomeLayout from "../components/HomeLayout";

import DataContext from "../context/dataContext";

// TODO: REFETCH CONTEXT

export default function Home() {
  // const [branches, status] = useFetchTable("allBranch", {});
  const [branches] = useContext(DataContext).branchesState;

  // console.log(branches);
  // console.log(status);
  return (
    <HomeLayout>
      {branches.map((branch) => {
        return <BranchCard key={branch.id} branch={branch} />;
      })}
    </HomeLayout>
  );
}
