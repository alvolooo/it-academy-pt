import classes from "./courses.module.scss";
import open from "../../assets/Polygon1.svg";
import close from "../../assets/Polygon2.svg";
import { useState } from "react";

const Select1 = () => {
  return (
    <div className={classes.oppo}>
      <div className={classes.square}></div>
      <div className={`${classes.block} ${classes.sel1}`}></div>
    </div>
  );
};

const Select2 = () => {
  return (
    <div className={classes.oppo}>
      <div className={classes.square}></div>
      <div className={`${classes.block} ${classes.sel2}`}></div>
    </div>
  );
};

export const Courses = () => {
  const [isShowCourse, setisShowCourse] = useState(false);
  const [isShowPeriod, setisShowPeriod] = useState(false);
  return (
    <>
      <div>
        <p className={classes.title}>
          курсы <span>profsoft academy</span>
        </p>
        <p className={classes.text}>
          Пройди обучение и получи сертификат <br /> подтверждающий квалификацию
        </p>
      </div>
      <div className={classes.selectBlock}>
        <div className={classes.bigBlock}>
          <div className={`${classes.sel} ${classes.sel1}`}>
            <p>выберите курс</p>
            {!isShowCourse ? (
              <img src={open} onClick={() => setisShowCourse(true)} />
            ) : (
              <img src={close} onClick={() => setisShowCourse(false)} />
            )}
          </div>
          {isShowCourse ? <Select1 /> : null}
        </div>
        <div className={classes.bigBlock}>
          <div className={`${classes.sel} ${classes.sel2}`}>
            <p>период</p>
            {!isShowPeriod ? (
              <img src={open} onClick={() => setisShowPeriod(true)} />
            ) : (
              <img src={close} onClick={() => setisShowPeriod(false)} />
            )}
          </div>
          {isShowPeriod ? <Select2 /> : null}
        </div>
      </div>
    </>
  );
};
