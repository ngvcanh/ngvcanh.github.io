import { NextApiRequest, NextApiResponse } from "next";
import { PostItemInterface } from "@/types/base";
import { api } from "@/utils/api";
import { getPostsByCategory } from "@/utils/getPostsByCategory";

export async function fetchPostsByCategory() {
  return fetch(api.postsByCategory).then(rs => rs.json());
}

type CourseByCategory = Record<string, PostItemInterface[]>;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<CourseByCategory>,
) {
  const data = await getPostsByCategory<PostItemInterface>();
  const courses: CourseByCategory = {};

  data.forEach(d => {
    const cate = d.category || '';

    if (!courses[cate]) {
      courses[cate] = [];
    }

    courses[cate].push(d);
  });

  res.status(200).json(courses);
}