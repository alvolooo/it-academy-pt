export const SHOW_CERT = "SHOW_CERT";
export const HIDE_CERT = "HIDE_CERT";

export type Action = {
  type: string;
};

interface Feature {
  id: number;
  name: string;
}

export type CertificateAction = {
  id: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
} & Action;

export interface Certificate {
  id: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
}

export const certShowAction = ({
  id,
  fullName,
  direction,
  dateStart,
  dateFinish,
  features,
}: Certificate) => {
  return {
    type: SHOW_CERT,
    id,
    fullName,
    direction,
    dateStart,
    dateFinish,
    features,
  };
};

export const certHideAction = () => {
  return {
    type: HIDE_CERT,
    id: "",
    fullName: "",
    direction: "",
    dateStart: "",
    dateFinish: "",
    features: "",
  };
};

// type CertificateContextTypeWithToggle = {
//   fillData(certificate: Certificate): void;
// } & CertificateContextType;
//
// const toggle = (certificate: Certificate) => {
//   console.log(certificate);
// };
// export const CertificateContext =
//   createContext<CertificateContextTypeWithToggle>({
//     certificate: {
//       id: 0,
//       features: [],
//       dateStart: "",
//       direction: "",
//       dateFinish: "",
//       fullName: "",
//     },
//     isShow: false,
//     fillData: toggle,
//   });
