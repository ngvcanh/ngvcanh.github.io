import { GetServerSideProps, Metadata } from "next";
import { PageWithLayout, PostItemInterface } from "@/types/base";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { PostDetail } from "@/components/layout/PostDetail";
import { api, getApiUrl } from "@/utils/api";
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

const getApiPostDetail = (course: string, post: string) => getApiUrl(`${api.courses}/${course}/${post}`);

const Post: PageWithLayout<PostProps> = (props) => {
  const { course, post } = props;
  const apiPostDetail = getApiPostDetail(course, post);
  const { data } = useSWR<PostItemInterface>(apiPostDetail, fetchPostDetail);

  return (
    <Main>
      <PostDetail post={data!} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, resolvedUrl } = ctx;

  const apiPostDetail = getApiPostDetail(query?.course as string, query?.post as string);
  const postDetail = await fetchPostDetail(apiPostDetail);

  return {
    props: {
      ...query,
      post: (query?.post as string)?.replace(/\.html$/, ''),
      navbar: [],
      url: resolvedUrl,
      fallback: {
        [apiPostDetail]: postDetail,
      },
      metadata: {
        title: `${postDetail.title || postDetail.name} | ngvcanh's blog`,
        keywords: postDetail.keywords || "",
        description: postDetail.description || "",
        asPath: '/'
      },
    }
  };
};

Post.getLayout = HomeLayout;
export default Post;
