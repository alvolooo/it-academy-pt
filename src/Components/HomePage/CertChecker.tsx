import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import * as yup from "yup";

//other
import classes from "./certChecker.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as CircleArrow } from "../../assets/CircleArrow.svg";
import { Container } from "../Container";
import { Cert } from "./cert";
import { Wrapper } from "../Wrapper";
import { addCert, deleteCert } from "../../redux/actions-create/certActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { log } from "util";

export const CertChecker = () => {
  const state = useTypedSelector((state) => state.cert);
  const { addCert, deleteCert } = useActions();
  const [number, setNumber] = useState(1);

  const setCert = async () => {
    addCert();
  };

  const [isShow, setIsShow] = useState(false);
  const formik = useFormik({
    initialValues: { certNumber: "" },
    onSubmit: (values) => console.log(values),
  });

  const toMakeID = (id: string) => {
    let arr = id.split("-");
    let joinArr = arr.join("");
    if (joinArr.length == 13) {
      const res: number = Number(joinArr);
      return res;
    } else return 0;
  };

  return (
    <>
      <div>
        <p className={classes.title}>проверить сертификат</p>
        <p>Введите номер сертификата для проверки подлинности</p>

        <form className={classes.inputBlock}>
          <NumberFormat
            type={"text"}
            className={classes.input}
            value={formik.values.certNumber}
            onChange={formik.handleChange}
            name={"certNumber"}
            format={"##-####-#######"}
            placeholder={"08-09270-7321897"}
            onValueChange={async (value) => {
              if (toMakeID(value.value) != 0) {
                setNumber(toMakeID(value.value));
                await setCert();
              }
            }}
          />
          {number != 0 && isShow ? (
            <CircleArrow
              onClick={() => {
                setIsShow(false);
                formik.values.certNumber = "";
                deleteCert();
              }}
              className={classes.arrow}
            />
          ) : number != 0 ? (
            <Arrow
              className={classes.arrow__active}
              onClick={() => {
                !state.in_progress ? (
                  setIsShow(true)
                ) : (
                  <Arrow className={classes.arrow} />
                );
              }}
            />
          ) : (
            <Arrow className={classes.arrow} />
          )}
        </form>
      </div>
      {isShow ? (
        <Wrapper theme={"light"}>
          <Container>
            <Cert />
          </Container>
        </Wrapper>
      ) : null}
    </>
  );
};
