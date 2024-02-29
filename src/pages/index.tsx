import { PageWithLayout } from "@/types/base";
import { api, getApiUrl } from "@/utils/api";
import { fetchCourses } from "./api/courses";
import { Main } from "@/components/layout/Main";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { CategoryPost } from "@/components/layout/CategoryPost";
import useSWR from "swr";

const apiURL = getApiUrl(api.courses);

const Home: PageWithLayout = () => {
  const { data } = useSWR(apiURL);

  return (
    <Main>
      <CategoryPost title="LEARING" posts={data ?? []} />
    </Main>
  );
}

export async function getServerSideProps() {
  const courses = await fetchCourses(apiURL);

  return {
    props: {
      fallback: {
        [apiURL]: courses,
      }
    },
  };
}

Home.getLayout = HomeLayout;
export default Home;
