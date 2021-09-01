import classes from "./style.module.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

export const Design = () => {
  return (
    <div className={classes.cont}>
      <div className={classes.text}>
        <p className={classes.text__title}>Направление подготовки:</p>
        <p className={classes.text__content}>Design</p>

        <p className={classes.text__title}>Изучение:</p>
        <p className={classes.text__content}>
          Создание макетов и прототипов Web и Мобильных приложения для платформ
          iOS, Android в Figma. <br />
          Изучение UXPin, практическое применение полученных знаний
        </p>
      </div>
      <div className={classes.text}>
        <p className={classes.text__title}>Форма обучения:</p>
        <p className={classes.text__content}>очная</p>

        <p className={classes.text__title}>Период обучения: </p>
        <p className={classes.text__content}>01.07.2021-30.08.2021</p>

        <p className={classes.text__title}>Преподаватель:</p>
        <p className={classes.text__content}>Щелкунова Юлия Сергеевна</p>
      </div>
      <div className={classes.slider}>
        <div className={classes.slider__img}>
          <img src={img1} />
        </div>
        <div className={classes.slider__img}>
          <img src={img2} />
        </div>
      </div>
    </div>
  );
};
