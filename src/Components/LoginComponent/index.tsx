import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//others
import styles from "../LoginComponent/login.module.scss";
import { ReactComponent } from "*.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      width: "420px",
      marginTop: "25px",
      marginBottom: "25px",
    },
  })
);

export const LoginComponent = () => {
  const classes = useStyles();
  return (
    <>
      <form className={styles.container} noValidate autoComplete="off">
        <TextField
          label="логин"
          variant="filled"
          type={"email"}
          className={classes.input}
        />
        <TextField
          label="Пароль"
          variant="filled"
          className={classes.input}
          type={"password"}
        />
        <Button variant="contained" color="secondary">
          Войти
        </Button>
      </form>
    </>
  );
};
