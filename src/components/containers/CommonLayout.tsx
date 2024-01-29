import { AppLayout } from "@/types/base";
import { Header } from "@/components/layout/Header";

export const CommonLayout: AppLayout = (page) => {
  return (
    <>
      <Header />
      {page}
    </>
  );
}