import classes from "./personal.module.scss";
import image from "../../assets/PersonalPhoto.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Personal = () => {
  const state = useTypedSelector((state) => state.auth);
  return (
    <div className={classes.mainCont}>
      <img src={image} className={classes.mainCont__photo} />
      <div className={classes.nameCont}>
        <p className={classes.nameCont__name}>{state.name}</p>
        <p className={classes.nameCont__email}>{state.login}</p>
      </div>
    </div>
  );
};
