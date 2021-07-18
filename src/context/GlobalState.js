import React, { useEffect, useReducer } from "react";
import GlobalContext from "./globalContext";
import reducer from "./globalReducer";
import { setLogin } from "./globalActions";

export default function GlobalState({ children }) {
  const initialState = {
    isShowModal: false,
    isLoggedIn: false,
    isShowSidebar: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (localStorage.isLoggedIn === "true") dispatch(setLogin(true));
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}
