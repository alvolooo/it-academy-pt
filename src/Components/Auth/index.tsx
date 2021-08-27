import React, { useState } from "react";

import { NavLink } from "react-router-dom";

//other
import classes from "./auth.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import { logout, login } from "../../redux/actions-create/authAction";
import { ReactComponent as DisabledArrow } from "../../assets/Union.svg";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useFormik } from "formik";
import * as yup from "yup";

export const Auth = () => {
  const state = useTypedSelector((state) => state.auth);
  const { login, logout } = useActions();
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: { login: "", password: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object().shape({
      login: yup
        .string()
        .email("Введите корректный адрес")
        .max(225)
        .required("Введите адрес электронной почты"),
      password: yup
        .string()
        .min(4, "Минимум 4 символа")
        .max(30, "Максимум 30 символов"),
    }),
  });

  const showErrors = () => {
    setError(true);
  };

  const setLogin = async () => {
    state.login = formik.values.login;
    state.name = "Voloshina Alexandra Andreevna";
    state.token = "123456";
    debugger;
    login();
  };

  return (
    <>
      <div className={classes.main}>
        <p className={classes.title}>личный кабинет</p>
        <form className={classes.authBlock}>
          <input
            name={"login"}
            value={formik.values.login}
            onChange={formik.handleChange}
            type="text"
            className={classes.authBlock__input}
            placeholder={"EMAIL"}
            onBlur={formik.handleBlur}
          />

          <input
            name={"password"}
            type="password"
            value={formik.values.password}
            className={classes.authBlock__input}
            placeholder={"ПАРОЛЬ"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!formik.errors.login &&
          !formik.errors.password &&
          formik.touched.password &&
          formik.touched.login ? (
            <NavLink to={"/personal"} type={"submit"}>
              {!state.in_progress ? (
                <Arrow onClick={setLogin} />
              ) : (
                <DisabledArrow />
              )}
            </NavLink>
          ) : (
            <Arrow onClick={showErrors} />
          )}
        </form>
        {error ? (
          <>
            <div className={classes.error}>{formik.errors.login}</div>
            <div className={classes.error}>{formik.errors.password}</div>
          </>
        ) : null}

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
