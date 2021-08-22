import { useSelector } from "react-redux";

import classes from "./cert.module.scss";
import image from "../../assets/Rectangle1167.png";
import logo from "../../assets/Logo.svg";
import signature from "../../assets/podpis.svg";
import jellyfish from "../../assets/meduza.svg";
import { RootState } from "../../redux/type";
import { ActionCertState } from "../types/cert";

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
        <div className={classes.certificate}>
          <img src={image} className={classes.certificate__blackRec} />
          <div className={classes.certificate__textContainer}>
            <img
              src={logo}
              className={classes.certificate__textContainer__certLogo}
            />
            <p className={classes.firstText}>
              Сертификат о прохождении обучения
            </p>
            <span className={classes.name}>{state.fullName}</span>
            <hr />
            <p className={classes.secText}>
              Направление подготовки{" "}
              <span className={classes.certificate__textContainer__spanText}>
                DESIGN
              </span>{" "}
              <br />
              период обучения{" "}
              <span className={classes.certificate__textContainer__spanText}>
                01.07.2021-30.08.2021
              </span>
            </p>
            <div className={classes.features}>
              <span className={classes.feature}>Figma</span>
            </div>
            <div className={classes.dirBlock}>
              <p>
                Директор ООО ProfSoft <br />
                Каплин К.О.
              </p>
              <img src={signature} />
            </div>
          </div>
          <img src={jellyfish} className={classes.jellyfish} />
        </div>
      </div>
      <div className={classes.share}>поделиться</div>
    </div>
  );
};
