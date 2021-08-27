import classes from "./courses.module.scss";
import sel from "../../assets/Polygon1.svg";
export const Courses = () => {
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
            <img src={sel} />
          </div>
          <div>
            <div className={classes.square}></div>
            <div className={`${classes.block} ${classes.sel1}`}></div>
          </div>
        </div>
        <div className={classes.bigBlock}>
          <div className={`${classes.sel} ${classes.sel2}`}>
            <p>период</p>
            <img src={sel} />
          </div>
          <div>
            <div className={classes.square}></div>
            <div className={`${classes.block} ${classes.sel2}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};
