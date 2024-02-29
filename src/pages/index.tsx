import { PageWithLayout } from "@/types/base";
import { HomeLayout } from "@/components/containers/HomeLayout";
import { learningMenus } from "@/blog/learning/menus";
import Image from "next/image";
import { ScrollView } from "@/components/base/ScrollView";
import { PostItem } from "@/components/base/PostItem";

const Home: PageWithLayout = () => {
  return (
    <main id="app-root-main" className="is-header">
      <ScrollView>
        <div className="p-8">
          {learningMenus.map(learning => (
            <PostItem key={learning.url} item={learning} />
          ))};
        </div>
      </ScrollView>
    </main>
  );
}

Home.getLayout = HomeLayout;

export default Home;
