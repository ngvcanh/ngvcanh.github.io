/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeContainer from "@/containers/home";
import { AppPage } from "@/types/container";

const Home: AppPage = (props) => {
  return <HomeContainer {...props} />
}

export default Home;
