import { PageWithLayout, PostItemInterface } from "@/types/base";
import { fetchPostsByCategory } from "@/pages/api/posts/category";
import { fetchCourses } from "@/pages/api/courses";
import { api } from "@/utils/api";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { CategoryPost } from "@/components/layout/CategoryPost";
import useSWR from "swr";
import { GetServerSideProps } from "next";
import { getPostsByCategory } from "@/utils/getPostsByCategory";

const Learning: PageWithLayout = () => {
  const { data: courses } = useSWR<PostItemInterface[]>(api.courses, fetchCourses);
  const { data: postsByCategory } = useSWR<Record<string, PostItemInterface[]>>(api.postsByCategory, fetchPostsByCategory);

  console.log({courses, postsByCategory});

  return (
    <Main>
      {courses?.map((course) => {
        const posts = postsByCategory?.[course.url] ?? [];
        return (
          <CategoryPost
            key={course.url}
            title={course.name}
            titleURL={course.url}
            posts={posts}
          />
        );
      })}
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  getPostsByCategory();
  return Promise.resolve({
    props: {

    },
  });
};

Learning.getLayout = HomeLayout;
export default Learning;