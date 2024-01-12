import { PropsWithChildren, Ref, forwardRef } from "react";
import clsx, { ClassValue } from "clsx";
import arrayClass from "@/utils/arrayClass";

type NavComponent = keyof Pick<JSX.IntrinsicElements, "div" | "nav">;

export interface NavProps<Component extends NavComponent = "nav"> {
  component?: Component;
  className?: ClassValue | ClassValue[];
  listClass?: ClassValue | ClassValue[];
}

function NavBase<Component extends NavComponent = "nav">(
  props: PropsWithChildren<NavProps<Component>>, 
  ref: Ref<Component extends infer E ? E extends "nav" ? HTMLElement : HTMLDivElement : HTMLDivElement>
) {
  const { component = "nav", className, listClass, children } = props;
  const Com = component ;

  return (
    <Com {...{ ref } as any} className={clsx(...arrayClass(className))}>
      <ul className={clsx(...arrayClass(listClass))}>
        {children}
      </ul>
    </Com>
  );
}

const Nav = forwardRef(NavBase);
Nav.displayName = "Nav";

export default Nav;
