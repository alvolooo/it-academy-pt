import { Dispatch } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ActionTypes, AuthType } from "../../Components/types/auth";

export const login = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: AuthType.IN_PROGRESS, payLoad: true });
    try {
      const { login } = useAuth();
      const obj = await login();
      localStorage.setItem("userData", JSON.stringify(obj));
      dispatch({ type: AuthType.LOGIN, payLoad: obj });
      dispatch({ type: AuthType.IN_PROGRESS, payLoad: false });
    } catch (e) {
      dispatch({ type: AuthType.IN_PROGRESS, payLoad: false });
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: AuthType.LOGOUT, payLoad: true });
    localStorage.removeItem("userData");
  };
};

export interface ActionState {
  login: string;
  name: string;
  token: string;
  in_progress: boolean;
}
