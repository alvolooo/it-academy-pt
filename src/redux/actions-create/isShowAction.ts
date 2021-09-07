import { Dispatch } from "react";
import { IsShowActionTypes, IsShowType } from "../../Components/types/isShow";

export const show = () => {
  return (dispatch: Dispatch<IsShowActionTypes>) => {
    const obj = { isShow: true };
    dispatch({ type: IsShowType.SHOW, payLoad: obj });
  };
};

export const hide = () => {
  return (dispatch: Dispatch<IsShowActionTypes>) => {
    debugger;
    dispatch({ type: IsShowType.HIDE, payLoad: { isShow: false } });
  };
};
