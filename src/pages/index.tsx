import { PageWithLayout } from "@/types/base";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { Main } from "@/components/layout/Main";
import { CategoryPost } from "@/components/layout/CategoryPost";
import { api } from "@/utils/api";
import { fetchCourses } from "./api/courses";
import useSWR from "swr";

const Home: PageWithLayout = () => {
  const { data } = useSWR(api.courses, fetchCourses);

  return (
    <Main>
      <CategoryPost title="LEARING" posts={data ?? []} />
    </Main>
  );
}

Home.getLayout = HomeLayout;
export default Home;
