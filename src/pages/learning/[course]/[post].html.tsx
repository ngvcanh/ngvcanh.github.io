import { GetServerSideProps, Metadata } from "next";
import { PageWithLayout } from "@/types/base";
import { LearningLayout } from "@/components/containers/LearningLayout";
import { Main } from "@/components/layout/Main";

export const metadata: Metadata = {
  title: "My post",
  keywords: ["post"],
  description: "this is content of description's post"
};

export interface PostProps {
  course: string;
  post: string;
}

const Post: PageWithLayout<PostProps> = (props) => {
  const { course, post } = props;
  return (
    <Main sidebar>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
      <div>{course} :: {post}</div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => Promise.resolve({
  props: {
    ...ctx.query,
    post: (ctx.query?.post as string)?.replace(/\.html$/, ''),
    navbar: [],
  }
});

Post.getLayout = LearningLayout;
export default Post;
