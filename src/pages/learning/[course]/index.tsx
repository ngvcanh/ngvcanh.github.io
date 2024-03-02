import { CategoryPost } from "@/components/layout/CategoryPost";
import { Main } from "@/components/layout/Main";
import { fetchCourseDetail } from "@/pages/api/courses/[course]";
import { fetchPostsByCategory } from "@/pages/api/posts/category";
import { PageWithLayout } from "@/types/base";
import { api, getApiUrl } from "@/utils/api";
import { GetServerSideProps } from "next";
import useSWR from "swr";

export interface CourseProps {
  url: string;
  course: string;
}

const getApiCourseDetail = (course: string) => getApiUrl(`${api.courseDetail}/${course}`);
const apiPosts = getApiUrl(api.postsByCategory);

const Course: PageWithLayout<CourseProps> = (props) => {
  const { url, course } = props;
  const apiCourseDetail = getApiCourseDetail(course);

  const { data: courseDetail } = useSWR(apiCourseDetail);
  const { data } = useSWR(apiPosts);

  const coursePosts = (data || {})[url] || [];

  return (
    <Main>
      <CategoryPost
        title={courseDetail?.name}
        posts={coursePosts ?? []}
      />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, resolvedUrl } = ctx;
  const apiCourseDetail = getApiCourseDetail((query?.course || '') as string);
  const courseDetail = await fetchCourseDetail(apiCourseDetail);
  const posts = await fetchPostsByCategory(apiPosts);

  return Promise.resolve({
    props: {
      ...query,
      url: resolvedUrl,
      fallback: {
        [apiCourseDetail]: courseDetail,
        [apiPosts]: posts,
      },
      metadata: {
        title: `${courseDetail.title || courseDetail.name} | ngvcanh's blog`,
        keywords: courseDetail.keywords || "",
        description: courseDetail.description || "",
        asPath: '/'
      },
    }
  });
};

export default Course;
