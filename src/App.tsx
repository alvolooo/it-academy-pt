import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table, Tree } from "./Components";
import "./app.module.scss";
import { Router } from "./router";
import { useDispatch } from "react-redux";
// import { loginAction } from "./redux/actions-create/authAction";
// import { AuthState } from "./redux/type";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const jsonUserData = localStorage.getItem("userData");
    if (jsonUserData) {
      const userData: AuthState = JSON.parse(jsonUserData);
      dispatch(loginAction(userData));
    }
  }, []);
  return <Router />;
}
