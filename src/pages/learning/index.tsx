import { PageWithLayout, PostItemInterface } from "@/types/base";
import { fetchPostsByCategory } from "@/pages/api/posts/category";
import { fetchCourses } from "@/pages/api/courses";
import { api, getApiUrl } from "@/utils/api";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import useSWR from "swr";
import { CategoryPost } from "@/components/layout/CategoryPost";

const apiCourses = getApiUrl(api.courses);
const apiPosts = getApiUrl(api.postsByCategory);

const Learning: PageWithLayout = () => {
  const { data: courses } = useSWR<PostItemInterface[]>(apiCourses);
  const { data: postsByCategory } = useSWR(apiPosts);

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

export async function getServerSideProps() {
  const courses = await fetchCourses(apiCourses);
  const postsByCategory = await fetchPostsByCategory(apiPosts);
console.log(courses);
console.log(postsByCategory);
  return {
    props: {
      fallback: {
        [apiCourses]: courses,
        [apiPosts]: postsByCategory,
      }
    },
  };
};

Learning.getLayout = HomeLayout;
export default Learning;