import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table, Tree } from "./Components";
import classes from "./app.module.scss";
export function App() {
  // return <Counter />;
  return (
    <Switch>
      <Route path={"/tree"} component={Tree} exact={true} />
      <Route path={"/counter"} component={Counter} exact={true} />
      <Route path={"/"} exact={true}>
        <NavLink to={"/tree"} className={classes.link}>
          TREE
        </NavLink>
        <Table />
      </Route>
    </Switch>
  );
}
