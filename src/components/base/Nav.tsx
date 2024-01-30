import { ClassValue, cx } from "@/utils/cx";
import { PropsWithChildren, Ref, forwardRef } from "react";

export type NavComponentPropType = keyof Pick<JSX.IntrinsicElements, "div" | "nav">;

export interface NavProps <ComponentElement extends NavComponentPropType = "nav"> {
  component?: ComponentElement;
  className?: ClassValue;
  listClass?: ClassValue;
}

function NavBase<ComponentElement extends NavComponentPropType = "nav">(
  props: PropsWithChildren<NavProps<ComponentElement>>,
  ref: Ref<ComponentElement extends infer E ? E extends "div" ? HTMLDivElement : HTMLElement : HTMLElement>,
) {
  const { component: Component = "nav", className, listClass, children } = props;

  return (
    <Component ref={ref as any} className={cx(className)}>
      <ul className={cx(listClass)}>
        {children}
      </ul>
    </Component>
  );
}

export const Nav = forwardRef(NavBase);
Nav.displayName = "Nav";
