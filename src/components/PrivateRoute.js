import React from "react";
import { Route, useHistory } from "react-router-dom";
import cookies from "js-cookie";

export default function PrivateRoute({ children, path }) {
  const history = useHistory();

  return (
    <Route
      path={path}
      render={() => {
        // TODO: change if use real authentication
        if (!cookies.get("token")) history.push("/");
        else return children;
      }}
    />
  );
}
