import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/type";
import { logout } from "../../redux/actions-create/authAction";

export const Header = () => {
  const dispatch = useDispatch();
  const setLogout = () => {
    dispatch(logout());
  };
  const history = useHistory();
  const token = useSelector<RootState, string>((state) => state.auth.token);
  return (
    <header className={classes.header}>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>

      <div className={classes.block}>
        <a
          href={"https://academy.profsoft.pro/"}
          className={classes.header__link}
        >
          Академия
        </a>
        <a href={"https://www.profsoft.pro/"} className={classes.header__link}>
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
