import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";

//Other
import classes from "./counter.module.scss";
import Button from "@material-ui/core/Button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          Главная
        </Link>
        <Link color="textPrimary" href="http://localhost:3000/counter">
          Счётчик
        </Link>
      </Breadcrumbs>

      <div className={classes.body}>
        <div className={classes.container}>
          <Paper elevation={4}>
            <div className={classes.container__counter}>{counter}</div>
            <div className={classes.container__button}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                перейти на структуры
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
};
