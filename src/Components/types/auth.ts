export enum AuthType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  IN_PROGRESS = "IN_PROGRESS",
}

interface LoginActionType {
  type: AuthType.LOGIN;
  payLoad: {
    login: string;
    name: string;
    token: string;
  };
}

interface LogoutActionType {
  type: AuthType.LOGOUT;
  payLoad: boolean;
}

interface StateActionType {
  type: AuthType.IN_PROGRESS;
  payLoad: boolean;
}

export type ActionTypes = LogoutActionType | LoginActionType | StateActionType;

export interface ActionState {
  login: string;
  token: string;
  name: string;
  in_progress: boolean;
}
