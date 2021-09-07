import {
  ActionCourseState,
  CourseType,
  CourseTypes,
} from "../../Components/types/course";

const initialState: ActionCourseState = {
  id: 0,
  title: "",
  isShow: false,
  in_progress: false,
};

export const courseReducer = (state = initialState, action: CourseTypes) => {
  switch (action.type) {
    case CourseType.ADD_COURSE: {
      return {
        ...state,
        ...action.payLoad,
      };
    }
    case CourseType.DEL_COURSE: {
      return {
        ...state,
        id: 0,
        title: "",
      };
    }
    case CourseType.SHOW_COURSE: {
      return {
        ...state,
        isShow: action.payLoad,
      };
    }
    case CourseType.HIDE_COURSE: {
      return {
        ...state,
        isShow: action.payLoad,
      };
    }
    case CourseType.IN_PROGRESS:
      return { ...state, in_progress: action.payLoad };
    default: {
      return state;
    }
  }
};
