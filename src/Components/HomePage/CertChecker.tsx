import React, { useContext, useState } from "react";
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
import { useDispatch } from "react-redux";

export const CertChecker = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [direction, setDirection] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [features, setFeatures] = useState("");

  const setCert = async () => {
    await dispatch(addCert());
  };

  const [isShow, setIsShow] = useState(false);
  const formik = useFormik({
    initialValues: { certNumber: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object().shape({
      certNumber: yup.string().min(15).max(15),
    }),
  });

  // if (formik.isValid) {
  //   {
  //     setId(formik.values.certNumber);
  //     setCert();
  //   }
  // }
  //const { isShow, certificate, fillData } = useContext(CertificateContext);

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
          />
          {/*<input*/}
          {/*  type="text"*/}
          {/*  name={"certNumber"}*/}
          {/*  value={formik.values.certNumber}*/}
          {/*  onChange={formik.handleChange}*/}
          {/*/>*/}
          {formik.isValid && isShow ? (
            <CircleArrow
              onClick={() => {
                setIsShow(false);
                formik.values.certNumber = "";
              }}
              className={classes.arrow}
            />
          ) : formik.isValid ? (
            <Arrow
              className={classes.arrow__active}
              onClick={() => setIsShow(true)}
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
