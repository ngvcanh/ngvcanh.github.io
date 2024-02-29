import { GetServerSideProps, Metadata } from "next";
import { PageWithLayout, PostItemInterface } from "@/types/base";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { PostDetail } from "@/components/layout/PostDetail";
import { api } from "@/utils/api";
import useSWR from "swr";
import { fetchPostDetail } from "@/pages/api/courses/[course]/[post]";
// import { getPost } from "@/utils/getPost";

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
  const { course, post } = props;
  const apiUrl = `${api.courses}/${course}/${post}`;
  const { data } = useSWR<PostItemInterface>(apiUrl, fetchPostDetail);

//   console.log(PostContents);

//   const Content = PostContents[url];
// console.log(Content);
  return (
    <Main>
      <PostDetail post={post} course={course} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return Promise.resolve({
    props: {
      ...ctx.query,
      post: (ctx.query?.post as string)?.replace(/\.html$/, ''),
      navbar: [],
      url: ctx.resolvedUrl,
    }
  })
};

Post.getLayout = HomeLayout;
export default Post;
