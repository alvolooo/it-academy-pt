import React, { useState } from "react";

import { NavLink } from "react-router-dom";

//other
import classes from "./auth.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  login,
  ActionState,
} from "../../redux/actions-create/authAction";
import { RootState } from "../../redux/type";
import { ReactComponent as DisabledArrow } from "../../assets/Union.svg";

export const Auth = () => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, ActionState>((state) => state.auth);
  const [loginn, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandlerLogin = (e: any) => {
    state.login = e.target.value;
    state.name = "Voloshina Alexandra Andreevna";
    state.token = "123456";
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
            {!state.in_progress ? (
              <Arrow onClick={toSetLogin} />
            ) : (
              <DisabledArrow />
            )}
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
