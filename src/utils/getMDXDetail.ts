import fs from "fs";
import matter from "gray-matter";
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify'
import slug from 'remark-slug';
import headings from 'remark-autolink-headings';
import hint from 'remark-hint';
import { remark } from "remark";

export async function getMDXDetail<Detail = {}>(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return {} as Detail;
  }

  const stats = fs.statSync(filePath);

  if (!stats.isFile()) {
    return {} as Detail;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    // .use(html)
    // .use(remarkParse)
    // .use(remarkGfm)
    // .use(remarkRehype)
    // .use(remarkParse)
    .use(remarkGfm)
    .use(slug as any)
    .use(headings as any, { behavior: 'wrap' })
    .use(hint as any)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  const content = processedContent.toString();

  return {
    content,
    ...matterResult?.data,
  } as Detail;
}