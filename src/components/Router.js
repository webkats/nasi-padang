import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import BranchDetail from "../pages/BranchDetail";
import EditMenu from "../pages/EditMenu";
import City from "../pages/City";

export default function Routes() {
  return (
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
      <Route exact path="/:city">
        <City />
      </Route>
      <Route exact path="*">
        <div>PAGE NOT FOUND</div>
      </Route>
    </Switch>
  );
}
