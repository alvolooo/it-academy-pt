import React from "react";
import NumberFormat from "react-number-format";

//other
import classes from "./certChecker.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export const CertChecker = () => {
  return (
    <>
      <div>
        <p className={classes.title}>проверить сертификат</p>
        <p>Введите номер сертификата для проверки подлинности</p>
        <div className={classes.inputBlock}>
          <NumberFormat
            className={classes.input}
            format={"##-####-#######"}
            placeholder={"08-09270-7321897"}
          />
          <Arrow className={classes.arrow} />
        </div>
      </div>
    </>
  );
};
