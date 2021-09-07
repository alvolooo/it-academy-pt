export enum CourseType {
  ADD_COURSE = "ADD_COURSE",
  DEL_COURSE = "DEL_COURSE",
  SHOW_COURSE = "SHOW_COURSE",
  HIDE_COURSE = "HIDE_COURSE",
  IN_PROGRESS = "IN_PROGRESS",
}

interface AddCourseActionType {
  type: CourseType.ADD_COURSE;
  payLoad: {
    id: number;
    title: string;
  };
}

interface DelCourseActionType {
  type: CourseType.DEL_COURSE;
  payLoad: boolean;
}

interface ShowCourseActionType {
  type: CourseType.SHOW_COURSE;
  payLoad: boolean;
}

interface HideCourseActionType {
  type: CourseType.HIDE_COURSE;
  payLoad: boolean;
}

interface StateCourseActionType {
  type: CourseType.IN_PROGRESS;
  payLoad: boolean;
}

export type CourseTypes =
  | AddCourseActionType
  | DelCourseActionType
  | StateCourseActionType
  | ShowCourseActionType
  | HideCourseActionType;

export interface ActionCourseState {
  id: number;
  title: string;
  isShow: boolean;
  in_progress: boolean;
}
