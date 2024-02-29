import { NextApiRequest, NextApiResponse } from "next";
import { PostItemInterface } from "@/types/base";
import { api } from "@/utils/api";
import { getCourses } from "@/utils/getCourse";

export function fetchCourses() {
  return fetch(api.courses).then(rs => rs.json());
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<PostItemInterface[]>,
) {
  const courses = await getCourses<PostItemInterface>();
  res.status(200).json(courses);
}