import { NextApiRequest, NextApiResponse } from "next";
import { PostItemInterface } from "@/types/base";
import { getCourses } from "@/utils/getCourse";

export function fetchCourses(url: string) {
  return fetch(url).then(rs => rs.json());
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<PostItemInterface[]>,
) {
  const courses = await getCourses<PostItemInterface>();
  res.status(200).json(courses);
}