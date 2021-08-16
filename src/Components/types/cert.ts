import { Feature } from "../../hooks/useCert";

export enum CertType {
  ADD_CERT = "ADD_CERT",
  DEL_CERT = "DEL_CERT",
  IN_PROGRESS = "IN_PROGRESS",
}

interface AddCertActionType {
  type: CertType.ADD_CERT;
  payLoad: {
    id: number;
    fullName: string;
    direction: string;
    dateStart: string;
    dateFinish: string;
    features: Feature[];
  };
}

interface DelCertActionType {
  type: CertType.DEL_CERT;
  payLoad: boolean;
}

interface StateCertActionType {
  type: CertType.IN_PROGRESS;
  payLoad: boolean;
}

export type CertTypes =
  | AddCertActionType
  | DelCertActionType
  | StateCertActionType;

export interface ActionCertState {
  id: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
  in_progress: boolean;
}
