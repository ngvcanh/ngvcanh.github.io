import { GetServerSideProps, Metadata } from "next";
import { PageWithLayout } from "@/types/base";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { CategoryPost } from "@/components/layout/CategoryPost";
import { posts } from "@/blog/learning/posts";
import { learningMenus } from "@/blog/learning/menus";

export const metadata: Metadata = {
  title: "My post",
  keywords: ["post"],
  description: "this is content of description's post"
};

export interface PostProps {
  course: string;
  post: string;
}

const categories = Object.keys(posts);

const Learning: PageWithLayout<PostProps> = (props) => {
  return (
    <Main>
      {categories.map((category) => {
        const cate = learningMenus.find(c => c.url === category);
        return (
          <CategoryPost
            key={category}
            title={cate?.name}
            titleURL={category}
            posts={posts[category]}
          />
        );
      })}
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => Promise.resolve({
  props: {
    ...ctx.query,
    navbar: [],
  }
});

Learning.getLayout = HomeLayout;
export default Learning;