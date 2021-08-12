import { Route, Switch } from "react-router-dom";
import { TablePage } from "../Pages/Table";
import { Login } from "../Pages/Login";
import { TreePage } from "../Pages/TreePage";
import { CounterPage } from "../Pages/CounterPage";
import { IndexPage } from "../Pages/IndexPage";
import { Landing } from "../Pages/Landing";
import {} from "../Pages/Landing";
import React from "react";
import { AuthPage } from "../Pages/Landing/authPage";
import { PersonalPage } from "../Pages/Landing/personalPage";

export const Router = () => {
  return (
    <Switch>
      {/*<Route path={"/tree"} component={TreePage} exact={true} />*/}
      {/*<Route path={"/counter"} component={CounterPage} exact={true} />*/}
      {/*<Route path={"/table"} component={TablePage} exact={true} />*/}
      {/*<Route path={"/login"} component={Login} exact={true} />*/}
      <Route path={"/"} exact={true} component={Landing}></Route>
      <Route path={"/courses"} component={Landing} exact={true} />
      <Route path={"/auth"} component={AuthPage} exact={true} />
      <Route path={"/personal"} component={PersonalPage} exact={true} />
      <Route path={"/personal"} component={PersonalPage} exact={true} />
    </Switch>
  );
};
