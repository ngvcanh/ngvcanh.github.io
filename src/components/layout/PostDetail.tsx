import { forwardRef } from "react";
import { HTMLProps } from "@/types/html";
import { PostItemInterface } from "@/types/base";
import rehypeHighlight from 'rehype-highlight';
import { api } from "@/utils/api";
import useSWR from "swr";
import { fetchPostDetail } from "@/pages/api/courses/[course]/[post]";

export interface PostDetailProps extends HTMLProps<HTMLDivElement> {
  course: string;
  post: string;
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  }
};

export const PostDetail = forwardRef<HTMLElement, PostDetailProps>(
  function PostDetail(props, ref) {
    const { post, course } = props;
    const apiUrl = `${api.courses}/${course}/${post}`;
  const { data } = useSWR<PostItemInterface>(apiUrl, fetchPostDetail);

    return (
      <article ref={ref} className="Post-root">
        <div className="Post-content">
          <div className="Post-article"dangerouslySetInnerHTML={{ __html: data?.content || '' }} />
        </div>
      </article>
    );
  }
);