export const api = {
  courses: "courses",
  postsByCategory: "posts/category",
  courseDetail: "courses",
}

const API_ENPOINT = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

export const getApiUrl = (pathname: string) => `${API_ENPOINT}${pathname}`;
