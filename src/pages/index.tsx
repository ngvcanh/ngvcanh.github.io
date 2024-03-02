import { PageWithLayout } from "@/types/base";
import { api, getApiUrl } from "@/utils/api";
import { fetchCourses } from "./api/courses";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { CategoryPost } from "@/components/layout/CategoryPost";
import useSWR from "swr";
import { GetServerSidePropsContext } from "next";

const apiURL = getApiUrl(api.courses);

const Home: PageWithLayout = () => {
  const { data } = useSWR(apiURL);

  return (
    <Main>
      <CategoryPost title="LEARING" posts={data ?? []} />
    </Main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const courses = await fetchCourses(apiURL);

  return {
    props: {
      fallback: {
        [apiURL]: courses,
      },
      metadata: {
        title: "ngvcanh's blog",
        keywords: "lập trình,rust,react,typescript,html-css,php,docker,programming,code,coder,trí tuệ nhân tạo,ai assistant,best practice",
        description: "Blog tài liệu học lập trình, tìm kiếm công cụ hỗ trợ trí tuệ nhân tạo (AI)",
        asPath: '/'
      }
    },
  };
}

Home.getLayout = HomeLayout;
export default Home;
