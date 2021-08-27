import classes from "./personal.module.scss";
import image from "../../assets/PersonalPhoto.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

export const Personal = () => {
  return (
    <div className={classes.mainCont}>
      <img src={image} className={classes.mainCont__photo} />
      <div className={classes.nameCont}>
        <p className={classes.nameCont__name}>ddd</p>
        <p className={classes.nameCont__email}>ddd</p>
      </div>
    </div>
  );
};
