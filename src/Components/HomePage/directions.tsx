import React from "react";

//other
import classes from "./directions.module.scss";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { ReactComponent as ArrowWhite } from "../../assets/arrowWhite.svg";

export const Directions = () => {
  return (
    <>
      <div className={classes.plusContainer}>
        <Plus className={classes.plus} />
      </div>
      <div className={classes.titleBlock}>
        <p className={classes.title}>все направления обучения</p>
        <ArrowWhite />
      </div>
      <p className={classes.text}>
        Компания ProfSoft находится на рынке мобильных приложений более 5-ти
        лет. Мы не только разрабатываем качественные программные продукты, но и
        подготавливаем квалифицированных IT-специалистов
      </p>
      <div className={classes.rectContainer}>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
        <div className={classes.rect}></div>
      </div>
    </>
  );
};
