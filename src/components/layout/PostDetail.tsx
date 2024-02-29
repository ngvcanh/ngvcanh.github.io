import { forwardRef } from "react";
import { HTMLProps } from "@/types/html";
import { PostItemInterface } from "@/types/base";

export interface PostDetailProps extends HTMLProps<HTMLDivElement> {
  post: PostItemInterface;
}

export const PostDetail = forwardRef<HTMLElement, PostDetailProps>(
  function PostDetail(props, ref) {
    const { post } = props;

    return (
      <article ref={ref} className="Post-root">
        <div className="Post-content">
          <div className="Post-article"dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
        </div>
      </article>
    );
  }
);