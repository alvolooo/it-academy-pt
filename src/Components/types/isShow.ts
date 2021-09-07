export enum IsShowType {
  SHOW = "SHOW",
  HIDE = "HIDE",
  IN_PROGRESS = "IN_PROGRESS",
}

interface ShowActionType {
  type: IsShowType.SHOW;
  payLoad: {
    isShow: boolean;
  };
}

interface HideActionType {
  type: IsShowType.HIDE;
  payLoad: {
    isShow: boolean;
  };
}

interface StateActionType {
  type: IsShowType.IN_PROGRESS;
  payLoad: boolean;
}

export type IsShowActionTypes =
  | HideActionType
  | ShowActionType
  | StateActionType;

export interface IsShowActionState {
  isShow: boolean;
  in_progress: boolean;
}
