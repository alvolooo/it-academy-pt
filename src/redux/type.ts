import { ActionState } from "../Components/types/auth";
import { ActionCertState } from "../Components/types/cert";

export type RootState = {
  auth: ActionState;
  cert: ActionCertState;
};
