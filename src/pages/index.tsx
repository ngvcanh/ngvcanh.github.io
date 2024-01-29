import { PageWithLayout } from "@/types/base";
import { HomeLayout } from "@/components/containers/HomeLayout";

const Home: PageWithLayout = () => {
  return (
    <main>
      Home
    </main>
  );
}

Home.getLayout = HomeLayout;

export default Home;
