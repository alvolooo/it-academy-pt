import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";

//other
import classes from "./certChecker.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as CircleArrow } from "../../assets/CircleArrow.svg";
import { ReactComponent as GreyArrow } from "../../assets/GreyArrow.svg";
import { Container } from "../Container";
import { Cert } from "./cert";
import { Wrapper } from "../Wrapper";
import { addCert, deleteCert } from "../../redux/actions-create/certActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

export const CertChecker = () => {
  const state = useTypedSelector((state) => state.cert);
  const isShowState = useTypedSelector((state) => state.isShow);
  const { addCert, deleteCert, show, hide } = useActions();
  const [number, setNumber] = useState(0);

  const setCert = async () => {
    addCert();
  };

  const showCert = () => {
    show();
  };

  const hideCert = () => {
    hide();
  };

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
              let temp: number = toMakeID(value.value);
              if (temp != 0) {
                console.log(number);
                setNumber(temp);
                console.log(temp);
                console.log(number);
                await setCert();
              }
            }}
          />
          {number != 0 && isShowState.isShow ? (
            <CircleArrow
              onClick={() => {
                hideCert();
                deleteCert();
                formik.values.certNumber = "";
              }}
              className={classes.arrow}
            />
          ) : number != 0 && !isShowState.isShow ? (
            <Arrow
              className={classes.arrow__active}
              onClick={() => {
                !state.in_progress ? (
                  showCert()
                ) : (
                  <GreyArrow className={classes.arrow} />
                );
              }}
            />
          ) : (
            <GreyArrow className={classes.arrow} />
          )}
        </form>
      </div>
      {isShowState.isShow ? (
        <Wrapper theme={"light"}>
          <Container>
            <Cert />
          </Container>
        </Wrapper>
      ) : null}
    </>
  );
};
