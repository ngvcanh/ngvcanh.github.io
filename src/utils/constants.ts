import path from "path";

export const BLOG_DIRECTORY = path.join(process.cwd(), process.env.BLOG_FOLDER || '');
export const COURSE_DIRECTORY = path.join(BLOG_DIRECTORY, process.env.COURSE_FOLDER || '');
