import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

//others
import styles from "../LoginComponent/login.module.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        flexGrow: 1,
      },
    },
    input: {
      width: "420px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    control: {
      padding: theme.spacing(2),
    },
    paper: {
      height: theme.spacing(30),
      width: theme.spacing(60),
    },
    bread: {
      marginLeft: "20px",
    },
  })
);

export const LoginComponent = () => {
  const classes = useStyles();

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Обязательное поле для заполнения"),
      password: Yup.string()
        .required("Обязательное поле для заполнения")
        .min(5, "Минимум 5 символов"),
    }),

    onSubmit: () => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          Главная
        </Link>
        <Link color="textPrimary" href="http://localhost:3000/login">
          Логин
        </Link>
      </Breadcrumbs>
      <div className={classes.paper}>
        <Paper elevation={5}>
          <form className={styles.container} noValidate autoComplete="off">
            <TextField
              label="Логин"
              variant="filled"
              className={classes.input}
              type={"text"}
              value={values.email}
              name={"email"}
              onChange={handleChange}
              error={!!(errors.email && touched.email)}
              helperText={
                errors.email && touched.email
                  ? errors.email
                  : "Обязательное поле"
              }
            />
            <TextField
              label="Пароль"
              variant="filled"
              className={classes.input}
              type={"password"}
              value={values.password}
              name={"email"}
              onChange={handleChange}
              error={!!(errors.password && touched.password)}
              helperText={
                errors.password && touched.password
                  ? errors.password
                  : "Обязательное поле"
              }
            />
            <Button variant="contained" color="secondary">
              Войти
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  );
};
