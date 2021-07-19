import React, { useEffect, useReducer } from "react";
import GlobalContext from "./globalContext";
import reducer from "./globalReducer";
import { setLogin } from "./globalActions";
import cookies from "js-cookie";

export default function GlobalState({ children }) {
  const initialState = {
    isShowModal: false,
    isLoggedIn: false,
    isShowSidebar: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (cookies.get("token")) dispatch(setLogin(true));
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}
