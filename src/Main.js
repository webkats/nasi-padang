import React, { useContext, useEffect } from "react";
import SideBar from "./components/SideBar";
import Router from "./components/Router";
import GlobalContext from "./context/globalContext";
import { setShowSidebar } from "./context/globalActions";

import DataContext from "./context/dataContext";
import useFetchTable from "./hooks/useFetchTable";

export default function useMainContent() {
  const [{ isShowSidebar }, dispatch] = useContext(GlobalContext);

  const [branches, branchesStatus, revalidateBranches] = useFetchTable(
    "allBranch",
    {}
  );

  const [cities, citiesStatus, revalidateCities] = useFetchTable("allCity", {});

  useEffect(() => {
    if (window.innerWidth < 768) dispatch(setShowSidebar(false));
    window.addEventListener("resize", () => {
      dispatch(setShowSidebar(window.innerWidth < 768 ? false : true));
    });
    // eslint-disable-next-line
  }, []);

  if (branchesStatus === "success" && citiesStatus === "success") {
    const initialState = {
      branchesState: [branches, revalidateBranches],
      citiesState: [cities, revalidateCities],
    };

    return (
      <DataContext.Provider value={initialState}>
        <div className="row">
          {isShowSidebar && <SideBar />}
          <div
            className={`my-3 px-5 ${
              isShowSidebar ? "col-10 offset-2" : "col-12"
            }`}
          >
            <Router />
          </div>
        </div>
      </DataContext.Provider>
    );
  }

  return <div>Loading...</div>;
}
