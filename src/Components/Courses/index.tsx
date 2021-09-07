import classes from "./courses.module.scss";
import open from "../../assets/Polygon1.svg";
import close from "../../assets/Polygon2.svg";
import arrow from "../../assets/arrowWhite.svg";
import { useState } from "react";
import { Design } from "./design";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

export const Courses = () => {
  const state = useTypedSelector((state) => state.course);
  const [isShowCourse, setisShowCourse] = useState(false);
  const [isShowPeriod, setisShowPeriod] = useState(false);

  const { addCourse, hideCourse, showCourse } = useActions();

  const select = {
    select1: {
      id: 0,
      isActive: false,
      array: [
        { id: 0, sel: "все" },
        { id: 1, sel: "Design" },
        { id: 2, sel: "Backend" },
        { id: 3, sel: "iOS" },
        { id: 4, sel: "Android" },
        { id: 5, sel: "FalseDesign" },
        { id: 6, sel: "QA" },
        { id: 7, sel: "PM" },
      ],
    },

    select2: {
      id: 0,
      isActive: false,
      array: [
        { id: 0, sel: "2021" },
        { id: 1, sel: "2022" },
        { id: 2, sel: "2023" },
        { id: 3, sel: "2024" },
      ],
    },
  };

  const initialState = [
    { id: 0, active: false, select: "выберите курс" },
    { id: 1, active: false, select: "период" },
  ];

  // const [state, setState] = useState(initialState);

  const setCourse = () => {
    addCourse();
  };

  const Select1 = () => {
    return (
      <div className={classes.oppo}>
        <div className={classes.square}></div>
        <div className={`${classes.block} ${classes.sel1}`}>
          <div className={classes.block__textContainer}>
            {select.select1.array.map((direction) => (
              <p
                onClick={() => {
                  state.id = direction.id;
                  setisShowCourse(false);
                  setCourse();
                }}
              >
                {direction.sel}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Select2 = () => {
    const arr = ["2021", "2022", "2023"];
    return (
      <div className={classes.oppo}>
        <div className={classes.square}></div>
        <div className={`${classes.block} ${classes.sel2}`}>
          <div className={classes.block__textContainer}>
            {select.select2.array.map((year) => (
              <p>{year.sel}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
            <p>{state.title ? state.title : "выберите курс"}</p>
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
        <img
          src={arrow}
          className={classes.arrow}
          onClick={() => {
            state.isShow = true;
            setCourse();
          }}
        />
      </div>
    </>
  );
};
