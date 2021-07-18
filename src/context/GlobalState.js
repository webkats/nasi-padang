import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import reducer from "./globalReducer";

export default function GlobalState({ children }) {
  const initialState = {
    isShowModal: false,
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}
