import path from "path";
import fs from "fs";
import { BLOG_DIRECTORY } from "./constants";
import { getMDXDetail } from "./getMDXDetail";

export async function getPostsByCategory<Detail = {}>(beforeName = "", beforePath = BLOG_DIRECTORY) {
  const scan = fs.readdirSync(beforePath);
  let posts: Detail[] = [];

  for(let i = 0; i < scan.length; ++i) {
    const name = scan[i];
    const targetPath = path.join(beforePath, name);
    const stats = fs.statSync(targetPath);

    if (stats.isDirectory()) {
      const children = await getPostsByCategory<Detail>([beforeName, name].join("/"), targetPath);
      posts = [...posts.concat(...children)];
    }
    else if (stats.isFile() && name.match(/\.mdx$/) && name !== process.env.COURSE_FILE) {
      const file = await getMDXDetail<Detail>(targetPath);
      posts = [...posts, {...file, category: beforeName}];
    }
  }

  return posts;
}