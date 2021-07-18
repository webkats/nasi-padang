import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BranchDetail from "./pages/BranchDetail";
import EditMenu from "./pages/EditMenu";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 vh-100 position-fixed border py-3">
            <SideBar />
          </div>
          <div className="col-10 offset-2 my-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/branches/:BranchId">
                <BranchDetail />
              </Route>
              <Route exact path="/branches/:BranchId/edit-menu">
                <EditMenu />
              </Route>
              <Route exact path="*">
                <div>PAGE NOT FOUND</div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
