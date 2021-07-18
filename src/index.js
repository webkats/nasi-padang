import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import qoreContext from "./context/qoreContext";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <qoreContext.context.Provider
        value={{
          client: qoreContext.client,
        }}
      >
        <App />
      </qoreContext.context.Provider>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
