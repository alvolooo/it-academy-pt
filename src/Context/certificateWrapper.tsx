import { FC, ReactElement, useReducer, useState } from "react";

import {
  CertificateContext,
  CertificateContextType,
  Certificate,
} from "./certificate";
interface Props {
  children: ReactElement;
}

const initialValue: CertificateContextType = {
  isShow: false,
  certificate: {
    id: 0,
    features: [],
    dateStart: "",
    direction: "",
    dateFinish: "",
    fullName: "",
  },
};

interface Action {
  type: string;
  value: Certificate;
}
const reduce = (state: CertificateContextType, action: Action) => {
  switch (action.type) {
    case "fillData": {
      return { ...state, isShow: true, certificate: action.value };
    }
    default:
      return state;
  }
};
export const CertificateWrapper: FC<Props> = ({ children }: Props) => {
  const [certificate, dispatch] = useReducer(reduce, initialValue);

  const fillData = (data: Certificate) => {
    dispatch({ type: "fillData", value: data });
  };
  return (
    <CertificateContext.Provider
      value={{
        certificate: certificate.certificate,
        isShow: certificate.isShow,
        fillData,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};
