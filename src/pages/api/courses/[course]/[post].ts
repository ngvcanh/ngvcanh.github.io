import { NextApiRequest, NextApiResponse } from "next";
import { PostItemInterface } from "@/types/base";
import { getMDXDetail } from "@/utils/getMDXDetail";
import { COURSE_DIRECTORY } from "@/utils/constants";

export function fetchPostDetail(apiUrl: string) {
  return fetch(apiUrl).then(rs => rs.json());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostItemInterface>,
) {
  const postUrl = `${COURSE_DIRECTORY}/${req.query?.course}/${req.query?.post}.mdx`;
  const post = await getMDXDetail<PostItemInterface>(postUrl);
  res.status(200).json(post);
}