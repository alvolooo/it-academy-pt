import { Dispatch } from "react";
import { CourseType, CourseTypes } from "../../Components/types/course";
import { useCourse } from "../../hooks/useCourse";

export const addCourse = () => {
  return async (dispatch: Dispatch<CourseTypes>) => {
    dispatch({ type: CourseType.IN_PROGRESS, payLoad: true });
    try {
      const { addCourse } = useCourse();
      const obj = await addCourse();
      dispatch({ type: CourseType.ADD_COURSE, payLoad: obj });
      dispatch({ type: CourseType.IN_PROGRESS, payLoad: false });
    } catch (e) {
      dispatch({ type: CourseType.IN_PROGRESS, payLoad: false });
    }
  };
};

export const showCourse = () => {
  return (dispatch: Dispatch<CourseTypes>) => {
    dispatch({ type: CourseType.SHOW_COURSE, payLoad: true });
  };
};

export const hideCourse = () => {
  return (dispatch: Dispatch<CourseTypes>) => {
    dispatch({ type: CourseType.SHOW_COURSE, payLoad: false });
  };
};

export const deleteCourse = () => {
  return (dispatch: Dispatch<CourseTypes>) => {
    dispatch({ type: CourseType.DEL_COURSE, payLoad: true });
  };
};
