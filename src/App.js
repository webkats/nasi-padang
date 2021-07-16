import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BranchDetail from "./pages/BranchDetail";

export default function App() {
  return (
    <Router>
      <div className="container py-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/branches/:BranchId">
            <BranchDetail />
          </Route>
          <Route exact path="*">
            <div>PAGE NOT FOUND</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
