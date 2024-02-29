import { learningMenus } from "@/blog/learning/menus";
import { posts } from "@/blog/learning/posts";
import { CategoryPost } from "@/components/layout/CategoryPost";
import { Main } from "@/components/layout/Main";
import { PageWithLayout } from "@/types/base";
import { GetServerSideProps } from "next";

export interface CourseProps {
  pathname: string;
}

const Course: PageWithLayout<CourseProps> = (props) => {
  const { pathname } = props;

  const cate = learningMenus.find(c => c.url === pathname);
  const coursePosts = posts[pathname];

  return (
    <Main>
      <CategoryPost
        title={cate?.name}
        posts={coursePosts ?? []}
      />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const { query, req, resolvedUrl } = ctx;
  console.log(req)

  return Promise.resolve({
    props: {
      ...query,
      pathname: resolvedUrl,
    }
  });
};

export default Course;
