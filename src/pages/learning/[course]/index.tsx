import { CategoryPost } from "@/components/layout/CategoryPost";
import { Main } from "@/components/layout/Main";
import { fetchCourseDetail } from "@/pages/api/courses/[course]";
import { fetchPostsByCategory } from "@/pages/api/posts/category";
import { PageWithLayout } from "@/types/base";
import { api } from "@/utils/api";
import { GetServerSideProps } from "next";
import useSWR from "swr";

export interface CourseProps {
  url: string;
  course: string;
}

const Course: PageWithLayout<CourseProps> = (props) => {
  const { url, course } = props;

  const { data: courseDetail } = useSWR(api.courseDetail + course, fetchCourseDetail);
  const { data } = useSWR(api.postsByCategory, fetchPostsByCategory);

  const coursePosts = (data || {})[url] || [];
console.log({courseDetail, data})
  return (
    <Main>
      <CategoryPost
        title={courseDetail?.name}
        posts={coursePosts ?? []}
      />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const { query, resolvedUrl } = ctx;

  return Promise.resolve({
    props: {
      ...query,
      url: resolvedUrl,
    }
  });
};

export default Course;
