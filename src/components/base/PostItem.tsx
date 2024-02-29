import { forwardRef } from "react";
import { PostItemInterface, SizeType } from "@/types/base";
import { HTMLProps } from "@/types/html";
import { cx } from "@/utils/cx";
import Image from "next/image";
import Link from "next/link";
import { sizeClasses } from "@/utils/sizes";

export interface PostItemProps extends HTMLProps<HTMLAnchorElement> {
  item: PostItemInterface;
  imageSize?: SizeType;
}

export const PostItem = forwardRef<HTMLAnchorElement, PostItemProps>(
  function PostItem(props, ref) {
    const { item, className, imageSize = "md" } = props;
    return (
      <Link ref={ref} href={item.url} className={cx("PostItem-root", className)} title={item.title || item.name}>
        <div className={cx("PostItem-image", sizeClasses.image?.[imageSize])}>
          {item.image ? (
            <Image alt={item.name} src={item.image} width={38} height={38} className={sizeClasses.image?.[imageSize]} />
          ) : null}
        </div>
        <div className="PostItem-name">
          <h3 className="PostItem-title">{item.name}</h3>
          {item.summary ? (
            <div className="PostItem-summary">{item.summary}</div>
          ) : null} 
        </div>
      </Link>
    );
  }
);
