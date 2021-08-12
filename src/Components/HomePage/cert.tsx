import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Certif } from "../../assets/certificate.svg";
import classes from "./cert.module.scss";
import { AuthState, RootState } from "../../redux/type";

export const Cert = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div>
            <p className={classes.title}>Сертификат</p>
            <p className={classes.text}>
              № 08-09270-7321897 <br /> {state.name}
            </p>
          </div>
          <div>
            <div>
              <p className={classes.title}>Направление подготовки:</p>
              <p className={classes.text}>Design</p>
            </div>
            <div>
              <p className={classes.title}>Период обучения:</p>
              <p className={classes.text}> 01.07.2021-30.08.2021</p>
            </div>
            <div>
              <p className={classes.title}>Изучено:</p>
              <p className={classes.text}>
                Принципы создания макета; Прототипирование; <br />
                Основы Figma; UX-analytics
              </p>
            </div>
          </div>
        </div>
        <Certif className={classes.cer} />
      </div>
      <div className={classes.share}>поделиться</div>
    </div>
  );
};
