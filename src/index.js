import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import qoreContext from "./context/qoreContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <qoreContext.context.Provider
      value={{
        client: qoreContext.client,
      }}
    >
      <App />
    </qoreContext.context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
