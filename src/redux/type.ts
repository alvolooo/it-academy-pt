import { ActionState } from "../Components/types/auth";
import { ActionCertState } from "../Components/types/cert";
import { IsShowActionState } from "../Components/types/isShow";
import { ActionCourseState } from "../Components/types/course";

export type RootState = {
  auth: ActionState;
  cert: ActionCertState;
  isShow: IsShowActionState;
  course: ActionCourseState;
};
