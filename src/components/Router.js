import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import BranchDetail from "../pages/BranchDetail";
import EditMenu from "../pages/EditMenu";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/branches/:BranchId">
          <BranchDetail />
        </Route>
        <PrivateRoute exact path="/branches/:BranchId/edit-menu">
          <EditMenu />
        </PrivateRoute>
        <Route exact path="*">
          <div>PAGE NOT FOUND</div>
        </Route>
      </Switch>
    </Router>
  );
}
