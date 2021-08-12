import type { ActionState } from "./actions-create/authAction";

// export type AuthState = {
//   login: string;
//   name: string;
//   token: string;
// };

export type RootState = {
  auth: ActionState;
};
