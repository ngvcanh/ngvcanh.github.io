import { ReactNode, forwardRef } from "react";
import { PostItemInterface } from "@/types/base";
import { HTMLProps } from "@/types/html";
import { cx } from "@/utils/cx";
import { PostItem } from "@/components/base/PostItem";
import Link from "next/link";

export interface CategoryPostProps extends Omit<HTMLProps<HTMLDivElement>, "title"> {
  posts: PostItemInterface[];
  title?: ReactNode;
  titleURL?: string;
}

export const CategoryPost = forwardRef<HTMLDivElement, CategoryPostProps>(
  function CategoryPost(props, ref) {
    const { posts, className, title, titleURL } = props;

    const isLink = titleURL !== undefined;
    const TitleComponent = isLink ? Link : 'div';
    const titleProps = Object.assign(
      { className: "CategoryPost-title" },
      isLink ? { href: titleURL } : {},
    )

    return (
      <div ref={ref} className={cx("CategoryPost-root", className)}>
        {title !== undefined ? (
          <TitleComponent {...titleProps as any}>{title}</TitleComponent>
        ) : null}
        <div className="CategoryPost-body">
          {posts.map(learning => (
            <PostItem key={learning.url} item={learning} />
          ))};
        </div>
      </div>
    );
  }
);
