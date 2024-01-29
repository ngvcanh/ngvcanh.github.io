"use server";
import { FC } from "react";
import { learningNavbars } from "./navbars";
import Main from "@/components/layout/Main";
import Navbar from "@/components/layout/Navbar";
import IndexList from "./IndexList";

const LearningPage: FC = () => {
  return (
    <>
      <Navbar navbar={learningNavbars} />
      <Main nav>
        <IndexList />
      </Main>
    </>
  )
};

export default LearningPage;
