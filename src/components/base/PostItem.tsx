import { forwardRef } from "react";
import { MenuItem } from "@/types/base";
import { ClassValue, cx } from "@/utils/cx";
import Image from "next/image";

export interface PostItemProps {
  item: MenuItem;
  className?: ClassValue;
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(
  function PostItem(props, ref) {
    const { item, className } = props;
    return (
      <div ref={ref} className={cx("PostItem-root", className)}>
        <div className="PostItem-image">
          {item.image ? (
            <Image alt={item.name} src={item.image} width={38} height={38} />
          ) : null}
        </div>
        <div className="PostItem-name">
          <h3 className="PostItem-title">{item.name}</h3>
          <div className="PostItem-summary">{item.summary}</div>
        </div>
      </div>
    );
  }
);
