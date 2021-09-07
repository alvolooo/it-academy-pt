import { useTypedSelector } from "./useTypedSelector";

interface CourseData {
  id: number;
  title: string;
}

type UseCourseType = {
  addCourse(): Promise<CourseData>;
};

function getData(): Promise<CourseData> {
  return new Promise<CourseData>((resolve) => {
    const state = useTypedSelector((state) => state.course);
    resolve({
      id: 5,
      title: "design",
    });
  });
}

export const useCourse = (): UseCourseType => {
  const addCourse = async () => {
    const result = await getData();
    return result;
  };
  return {
    addCourse,
  };
};
