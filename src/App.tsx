import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table } from "./Components";
import classes from "./app.module.scss";
export function App() {
  // return <Counter />;
  return (
    <Switch>
      <Route path={"/counter"} component={Counter} exact={true} />
      <Route path={"/"} exact={true}>
        <Table />
        {/*<NavLink to={"/counter"} className={classes.link}>*/}
        {/*  перейти к счетчику*/}
        {/*</NavLink>*/}
      </Route>
    </Switch>
  );
}
