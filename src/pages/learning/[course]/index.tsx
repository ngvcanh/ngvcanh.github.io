import { PageWithLayout } from "@/types/base";
import { GetServerSideProps } from "next";

export interface CourseProps {
  course: string;
}

const Course: PageWithLayout<CourseProps> = (props) => {
  const { course } = props;

  return (
    <div>{course}</div>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const { query } = ctx;

  return Promise.resolve({
    props: {
      ...query
    }
  });
};

export default Course;
