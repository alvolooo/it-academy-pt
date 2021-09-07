import * as AuthActions from "./authAction";
import * as CertActions from "./certActions";
import * as IsShowActions from "./isShowAction";
import * as CourseActions from "./courseAction";

export default {
  ...AuthActions,
  ...CertActions,
  ...IsShowActions,
  ...CourseActions,
};
