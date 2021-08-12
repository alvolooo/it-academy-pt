import {
  SHOW_CERT,
  HIDE_CERT,
  CertificateAction,
} from "../actions-create/certActions";

const initialState = {
  id: "",
  fullName: "",
  direction: "",
  dateStart: "",
  dateFinish: "",
  features: "",
};

// export const certReducer = (
//   state = initialState,
//   action: CertificateAction
// ) => {
//   switch (action.type) {
//     case SHOW_CERT: {
//       const { id, fullName, direction, dateStart, dateFinish, features } =
//         action;
//       return { ...state, login, token, name };
//     }
//     case HIDE_CERT: {
//       return { ...state, login: "", token: "", name: "" };
//     }
//     default: {
//       return state;
//     }
//   }
// };
