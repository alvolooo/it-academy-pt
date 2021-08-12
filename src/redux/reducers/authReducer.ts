import {
  ActionState,
  ActionTypes,
  AuthType,
} from "../../Components/types/auth";

const initialState: ActionState = {
  login: "",
  token: "",
  name: "",
  in_progress: false,
};
export const authReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case AuthType.LOGIN: {
      return { ...state, ...action.payLoad };
    }
    case AuthType.LOGOUT: {
      return { ...state, login: "", token: "", name: "" };
    }
    case AuthType.IN_PROGRESS:
      return { ...state, in_progress: action.payLoad };
    default: {
      return state;
    }
  }
};
