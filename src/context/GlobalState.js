import React, { useEffect, useReducer } from "react";
import GlobalContext from "./globalContext";
import reducer from "./globalReducer";
import { setLogin } from "./globalActions";
import cookies from "js-cookie";

// import useFetchTable from "../hooks/useFetchTable";

export default function GlobalState({ children }) {
  // const [branches, branchesStatus, revalidateBranches] = useFetchTable(
  //   "allBranch",
  //   {}
  // );

  // const [cities, citiesStatus, revalidateCities] = useFetchTable("allCity", {});
  // TODO: MENUS

  // useEffect(() => {
  //   console.log(branches);
  // }, [branches]);

  // if (citiesStatus !== "success" || branchesStatus !== "success") {
  //   return <div>Loading...</div>;
  // }

  const initialState = {
    isShowModal: false,
    isLoggedIn: false,
    isShowSidebar: true,
    // branchesState: [branches, branchesStatus, revalidateBranches],
    // citiesState: [cities, citiesStatus, revalidateCities],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (cookies.get("token")) dispatch(setLogin(true));
  }, []);

  // if (citiesStatus === "success" && branchesStatus === "success") {
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
  // }

  // return <div>Loading...</div>;
}
