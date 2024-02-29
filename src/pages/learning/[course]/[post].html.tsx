import { GetServerSideProps, Metadata } from "next";
import { PageWithLayout } from "@/types/base";
import { Main } from "@/components/layout/Main";
import { PostContents } from "@/blog/learning/posts";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { PostDetail } from "@/components/layout/PostDetail";

export const metadata: Metadata = {
  title: "My post",
  keywords: ["post"],
  description: "this is content of description's post"
};

export interface PostProps {
  course: string;
  post: string;
  url: string;
}

const Post: PageWithLayout<PostProps> = (props) => {
  const { url } = props;

  const Content = PostContents[url];

  return (
    <Main>
      <PostDetail Content={Content} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => Promise.resolve({
  props: {
    ...ctx.query,
    post: (ctx.query?.post as string)?.replace(/\.html$/, ''),
    navbar: [],
    url: ctx.resolvedUrl,
  }
});

Post.getLayout = HomeLayout;
export default Post;
