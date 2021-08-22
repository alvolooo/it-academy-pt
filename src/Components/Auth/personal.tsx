import classes from "./personal.module.scss";
import image from "../../assets/PersonalPhoto.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/type";
import { ActionState } from "../../redux/actions-create/authAction";

interface Props {
  login: string;
  name: string;
  token: string;
}

export const Personal = () => {
  const state = useSelector<RootState, ActionState>((state) => state.auth);
  return (
    <div className={classes.mainCont}>
      {/*<PersonalPhoto className={classes.mainCont__photo} />*/}
      <img src={image} className={classes.mainCont__photo} />
      <div className={classes.nameCont}>
        <p className={classes.nameCont__name}>{state.name}</p>
        <p className={classes.nameCont__email}>{state.login}</p>
      </div>
    </div>
  );
};
