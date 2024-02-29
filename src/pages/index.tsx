import { PageWithLayout } from "@/types/base";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { Main } from "@/components/layout/Main";
import { CategoryPost } from "@/components/layout/CategoryPost";
import { learningMenus } from "@/blog/learning/menus";

const Home: PageWithLayout = () => {
  return (
    <Main>
      <CategoryPost posts={learningMenus} />
    </Main>
  );
}

Home.getLayout = HomeLayout;

export default Home;
