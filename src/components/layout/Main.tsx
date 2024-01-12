import { PropsWithChildren, forwardRef } from "react";
import { HTMLProps } from "@/types/html";
import clsx from "clsx";

export interface MainProps extends HTMLProps {
  disablePadding?: boolean;
  nav?: boolean;
}

const Main = forwardRef<HTMLElement, PropsWithChildren<MainProps>>(
  function Main(props, ref) {
    const { children, className, disablePadding, nav, ...rest } = props;

    return (
      <main
        {...{
          ...rest,
          ref,
          className: clsx(
            "pr-6 pb-6 pl-6 h-dvh w-dvw overflow-hidden text-white text-sm",
            disablePadding ? "pt-6" : "pt-20",
            nav && "md:pl-[19.5rem]",
            className
          )
        }}
      >
        {children}
      </main>
    );
  }
);

export default Main;
