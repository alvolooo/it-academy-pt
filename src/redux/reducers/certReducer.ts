import {
  ActionCertState,
  CertType,
  CertTypes,
} from "../../Components/types/cert";

const initialState: ActionCertState = {
  id: 0,
  fullName: "",
  direction: "",
  dateStart: "",
  dateFinish: "",
  features: [],
  in_progress: false,
};

export const certReducer = (state = initialState, action: CertTypes) => {
  switch (action.type) {
    case CertType.ADD_CERT: {
      return {
        ...state,
        ...action.payLoad,
      };
    }
    case CertType.DEL_CERT: {
      return {
        ...state,
        id: 0,
        fullName: "",
        direction: "",
        dateStart: "",
        dateFinish: "",
        features: [],
      };
    }
    case CertType.IN_PROGRESS:
      return { ...state, in_progress: action.payLoad };
    default: {
      return state;
    }
  }
};
