import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table, Tree } from "./Components";
import classes from "./app.module.scss";
import { Router } from "./router";

export function App() {
  return <Router />;
}
