import path from "path";
import { COURSE_DIRECTORY } from "./constants";
import { getMDXDetail } from "./getMDXDetail";
import { File } from "@/helpers/File";

export const getCoursePath = (course: string) =>
  path.join(COURSE_DIRECTORY, course, process.env.COURSE_FILE || '');

export const getCourseDetail = <Detail = {}>(name: string) => {
  const coursePath = getCoursePath(name);
  return getMDXDetail<Detail>(coursePath);
};

export const getCourses = async <Detail>() => {
  const dirs = File.scan(COURSE_DIRECTORY);

  const courses: Detail[] = [];

  for (let i = 0; i < dirs.length; ++i) {
    const name = dirs[i];
    const detail = await getCourseDetail<Detail>(name);
    courses.push(detail);
  }

  return courses;
};
