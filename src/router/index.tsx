import { Route, Switch } from "react-router-dom";
import { Bar } from "../Components";
import { TablePage } from "../Pages/Table";
import { Login } from "../Pages/Login";
import { TreePage } from "../Pages/TreePage";
import { CounterPage } from "../Pages/CounterPage";
import React from "react";

export const Router = () => {
  return (
    <Switch>
      <Route path={"/tree"} component={TreePage} exact={true} />
      <Route path={"/counter"} component={CounterPage} exact={true} />
      <Route path={"/table"} component={TablePage} exact={true} />
      <Route path={"/login"} component={Login} exact={true} />
      <Route path={"/"} exact={true} component={Bar}></Route>
    </Switch>
  );
};
