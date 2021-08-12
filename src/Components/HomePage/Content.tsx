import React from "react";

//other
import { Text } from "../Text";
import classes from "./content.module.scss";
import { ReactComponent as Plus } from "../../assets/Plus.svg";

export const Content = () => {
  return (
    <>
      <div className={classes.plusContainer}>
        <Plus className={classes.plus} />
      </div>
      <p className={classes.mainText}>ТВОЙ БИЛЕТ В КОМАНДУ МЕЧТЫ</p>
      <p className={classes.otherText}>
        Пройди обучение и получи сертификат подтверждающий квалификацию
      </p>
      <button className={classes.toCheckBut}>ПРОВЕРИТЬ СЕРТИФИКАТ</button>
      <hr className={classes.line} />
      <p className={classes.why}>Зачем?</p>
      <p className={classes.text}>
        Компания ProfSoft находится на рынке мобильных приложений более 5-ти
        лет. Мы не только разрабатываем качественные программные продукты, но и
        подготавливаем квалифицированных IT-специалистов
      </p>
      <div className={classes.numberCont}>
        <div className={classes.cont}>
          <p className={classes.num}>3</p>
          <p className={classes.tit}>школы разработки</p>
        </div>
        <div className={classes.cont}>
          <p className={classes.num}>8</p>
          <p className={classes.tit}>направлений обучения</p>
        </div>
        <div className={classes.cont}>
          <p className={classes.num}>435</p>
          <p className={classes.tit}>записей</p>
        </div>
        <div className={classes.cont}>
          <p className={classes.num}>75</p>
          <p className={classes.tit}>учеников</p>
        </div>
      </div>
    </>
  );
};
