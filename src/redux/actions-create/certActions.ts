import { Dispatch } from "react";
import { ActionTypes, AuthType } from "../../Components/types/auth";
import { useCert } from "../../hooks/useCert";
import {
  ActionCertState,
  CertType,
  CertTypes,
} from "../../Components/types/cert";

export const addCert = () => {
  return async (dispatch: Dispatch<CertTypes>) => {
    dispatch({ type: CertType.IN_PROGRESS, payLoad: true });
    try {
      const { addCert } = useCert();
      const obj = await addCert();
      localStorage.setItem("certData", JSON.stringify(obj));
      dispatch({ type: CertType.ADD_CERT, payLoad: obj });
      dispatch({ type: CertType.IN_PROGRESS, payLoad: false });
    } catch (e) {
      dispatch({ type: CertType.IN_PROGRESS, payLoad: false });
    }
  };
};

export const deleteCert = () => {
  return (dispatch: Dispatch<CertTypes>) => {
    dispatch({ type: CertType.DEL_CERT, payLoad: true });
    localStorage.removeItem("certData");
  };
};
