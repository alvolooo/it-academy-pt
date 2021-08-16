import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as BlackRec } from "../../assets/Rectangle1167.svg";
import { ReactComponent as CertificateImage } from "../../assets/certificate.svg";
import classes from "./cert.module.scss";
import { RootState } from "../../redux/type";
import { ActionCertState } from "../types/cert";
import { useState } from "react";

export const Cert = () => {
  const state = useSelector<RootState, ActionCertState>((state) => state.cert);
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div>
            <p className={classes.title}>Сертификат</p>
            <p className={classes.text}>
              № {state.id} <br /> {state.fullName}
            </p>
          </div>
          <div>
            <p className={classes.title}>Преподаватель:</p>
            <p className={classes.text}> Щелкунова Ю.С.</p>
          </div>
          <div>
            <p className={classes.title}>Направление подготовки:</p>
            <p className={classes.text}>{state.direction}</p>
          </div>
          <div>
            <p className={classes.title}>Период обучения:</p>
            <p className={classes.text}>
              {" "}
              {state.dateStart} - {state.dateFinish}
            </p>
          </div>
          <div>
            <p className={classes.title}>Изучено:</p>
            <p className={classes.text}>{state.features}</p>
          </div>
        </div>
        {/*<div className={classes.certificate}>*/}
        {/*  <BlackRec className={classes.certificate__blackRec} />*/}
        {/*</div>*/}
        <CertificateImage className={classes.cer} />
      </div>
      <div className={classes.share}>поделиться</div>
    </div>
  );
};
