import { NextApiRequest, NextApiResponse } from "next";
import { PostItemInterface } from "@/types/base";
import { getCourseDetail } from "@/utils/getCourse";

export function fetchCourseDetail(apiUrl: string) {
  return fetch(apiUrl).then(rs => rs.json());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostItemInterface>,
) {
  const course = await getCourseDetail<PostItemInterface>((req.query?.course || '') as string);
  res.status(200).json(course);
}