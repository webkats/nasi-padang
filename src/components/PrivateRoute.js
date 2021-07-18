import React from "react";
import { Route, useHistory } from "react-router-dom";

export default function PrivateRoute({ children, path }) {
  const history = useHistory();

  return (
    <Route
      path={path}
      render={() => {
        // TODO: change if use real authentication
        if (localStorage.isLoggedIn === "false") history.push("/");
        else return children;
      }}
    />
  );
}
