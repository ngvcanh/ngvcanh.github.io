import { PageWithLayout, PostItemInterface } from "@/types/base";
import { fetchPostsByCategory } from "@/pages/api/posts/category";
import { fetchCourses } from "@/pages/api/courses";
import { api, getApiUrl } from "@/utils/api";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { CategoryPost } from "@/components/layout/CategoryPost";
import useSWR from "swr";

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

  return {
    props: {
      fallback: {
        [apiCourses]: courses,
        [apiPosts]: postsByCategory,
      },
      metadata: {
        title: "Các khoá học lập trình | ngvcanh's blog",
        keywords: "lập trình,rust,react,typescript,html-css,php,docker,programming,code,coder,trí tuệ nhân tạo,ai assistant,best practice",
        description: "Blog tài liệu học lập trình, tìm kiếm công cụ hỗ trợ trí tuệ nhân tạo (AI)",
        asPath: '/'
      },
    },
  };
};

Learning.getLayout = HomeLayout;
export default Learning;