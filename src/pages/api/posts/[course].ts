import { NextApiRequest, NextApiResponse } from "next";
import { getPostsByCategory } from "@/utils/getPostsByCategory";
import { PostItemInterface } from "@/types/base";

type CourseByCategory = Record<string, PostItemInterface[]>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const data = await getPostsByCategory<PostItemInterface>();
  const courses: PostItemInterface[] = [];
  const cate = `/learning/${req.query?.course}`;

  data.forEach(d => {
    cate === d.category && courses.push(d);
  });

  res.status(200).json(courses);
}