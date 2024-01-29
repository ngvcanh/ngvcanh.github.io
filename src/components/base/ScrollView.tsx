import { PropsWithChildren, RefObject, forwardRef } from "react";
import { HTMLProps } from "@/types/html";
import { ClassValue, cx } from "@/utils/cx";

export interface ScrollViewProps extends HTMLProps<HTMLDivElement> {
  direction?: "auto" | "x" | "y";
  rootRef?: RefObject<HTMLDivElement>;
  innerClass?: ClassValue;
}

export const scrollViewClasses = {
  root: "ScrollView-root",
  inner: "ScrollView-inner",
}

export const ScrollView = forwardRef<HTMLDivElement, PropsWithChildren<ScrollViewProps>>(
  function ScrollView(props, ref) {
    const { className, children, innerClass, rootRef, direction, ...rest } = props;

    return (
      <div {...rest} ref={rootRef} className={cx(scrollViewClasses.root, className)}>
        <div ref={ref} className={cx(scrollViewClasses.inner, direction, innerClass)}>
          {children}
        </div>
      </div>
    );
  }
);

ScrollView.defaultProps = {
  direction: 'auto',
}
