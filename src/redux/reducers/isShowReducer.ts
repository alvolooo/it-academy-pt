import {
  IsShowActionState,
  IsShowType,
  IsShowActionTypes,
} from "../../Components/types/isShow";

const initialState: IsShowActionState = {
  isShow: false,
  in_progress: false,
};

export const isShowReducer = (
  state = initialState,
  action: IsShowActionTypes
) => {
  switch (action.type) {
    case IsShowType.SHOW: {
      return { ...state, isShow: true };
    }
    case IsShowType.HIDE: {
      return { ...state, isShow: false };
    }
    case IsShowType.IN_PROGRESS:
      return { ...state, in_progress: action.payLoad };
    default: {
      return state;
    }
  }
};
