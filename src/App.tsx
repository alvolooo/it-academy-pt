import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table, Tree } from "./Components";
import "./app.module.scss";
import { Router } from "./router";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions-create/authAction";
import { ActionState } from "./Components/types/auth";

export function App() {
  useEffect(() => {
    const jsonUserData = localStorage.getItem("userData");
    if (jsonUserData) {
      const userData: ActionState = JSON.parse(jsonUserData);
      login();
    }
  }, []);
  return <Router />;
}
