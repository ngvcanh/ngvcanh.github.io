import { forwardRef } from "react";
import { MDXComponent } from "@/types/base";
import { HTMLProps } from "@/types/html";
import rehypeHighlight from 'rehype-highlight';


export interface PostDetailProps extends HTMLProps<HTMLDivElement> {
  Content: MDXComponent;
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  }
};

export const PostDetail = forwardRef<HTMLElement, PostDetailProps>(
  function PostDetail(props, ref) {
    const { Content } = props;
console.log(Content);
    return (
      <article ref={ref} className="Post-root">
        <div className="Post-content">
          <div className="Post-article">
            <Content options={options} />
          </div>
        </div>
      </article>
    );
  }
);