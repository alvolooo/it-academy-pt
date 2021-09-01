import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/type";
import { logout } from "../../redux/actions-create/authAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

export const Header = () => {
  const state = useTypedSelector((state) => state.auth);
  const { login, logout } = useActions();
  const setLogout = () => {
    logout();
  };
  const token = useTypedSelector((state) => state.auth.token);
  return (
    <header className={classes.header}>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>

      <div className={classes.block}>
        <a
          href={"https://academy.profsoft.pro/"}
          className={classes.header__link}
          target="_blank"
        >
          Академия
        </a>
        <a
          href={"https://www.profsoft.pro/"}
          className={classes.header__link}
          target="_blank"
        >
          Компания
        </a>
        <NavLink
          to={"/courses"}
          exact={true}
          className={classes.header__link}
          activeClassName={classes.header__link__active}
        >
          Курсы
        </NavLink>
        {!token ? (
          <NavLink to={"/auth"} className={classes.header__link__entry}>
            Войти
          </NavLink>
        ) : (
          <NavLink to={"/auth"}>
            <div
              className={classes.header__link__entry}
              onClick={() => {
                setLogout();
              }}
            >
              Выйти
            </div>
          </NavLink>
        )}
      </div>
    </header>
  );
};
