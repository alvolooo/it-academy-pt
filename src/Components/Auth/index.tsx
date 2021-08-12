import React, { useState } from "react";

import { NavLink } from "react-router-dom";

//other
import classes from "./auth.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions-create/authAction";
import { login } from "../../redux/actions-create/authAction";

export const Auth = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandlerLogin = (e: any) => {
    setLogin(e.target.value);
  };

  const onChangeHandlerPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const toSetLogin = async () => {
    await dispatch(login());
  };

  const setLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={classes.main}>
        <p className={classes.title}>личный кабинет</p>
        <form className={classes.authBlock}>
          <input
            type="text"
            className={classes.authBlock__input}
            placeholder={"EMAIL"}
            onChange={onChangeHandlerLogin}
          />
          <input
            type="password"
            className={classes.authBlock__input}
            placeholder={"ПАРОЛЬ"}
            onChange={onChangeHandlerPassword}
          />
          <NavLink to={"/personal"}>
            <Arrow onClick={toSetLogin} />
          </NavLink>
        </form>
        <div className={classes.issueBlock}>
          <p className={classes.issue}>Что-то не получается? </p>
          <p className={classes.issue}>
            Напишите в поддержку <span>academy@profsoft.pro</span>
          </p>
        </div>
      </div>
    </>
  );
};
