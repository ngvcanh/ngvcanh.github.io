import { FC, PropsWithChildren, RefObject } from "react";
import { ClassValue, cx } from "@/utils/cx";
import { ScrollView, ScrollViewProps } from "../base/ScrollView";

export interface MainProps {
  id?: string;
  className?: ClassValue;
  header?: boolean;
  sidebar?: boolean;
  padding?: boolean;
  scrollView?: boolean;
  scrollRef?: RefObject<HTMLDivElement>;
  scrollProps?: ScrollViewProps;
}

export const Main: FC<PropsWithChildren<MainProps>> = (props) => {
  const { id, children, className, header, sidebar, padding, scrollView, scrollRef, scrollProps } = props;

  return (
    <main
      id={id}
      className={cx(
        className,
        header && "is-header",
        sidebar && "is-sidebar",
        padding && !scrollView && "padding"
      )}
    >
      {scrollView
        ? (
          <ScrollView
            {...scrollProps}
            ref={scrollRef}
            innerClass={cx(scrollProps?.innerClass, padding && "padding")}
          >
            {children}
          </ScrollView>
        )
        : children
      }
    </main>
  );
};

Main.defaultProps = {
  id: "app-root-main",
  header: true,
  padding: true,
  scrollView: true,
};
