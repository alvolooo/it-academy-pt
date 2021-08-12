import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

export const Header = () => {
  const history = useHistory();
  return (
    <header className={classes.header}>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>

      <div>
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
        <NavLink to={"/auth"} className={classes.header__link__entry}>
          Войти
        </NavLink>
      </div>
    </header>
  );
};
