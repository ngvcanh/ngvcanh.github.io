import { FC, PropsWithChildren } from "react";
import { ClassValue, cx } from "@/utils/cx";

export interface SidebarProps {
  id?: string;
  className?: ClassValue;
}

export const Sidebar: FC<PropsWithChildren<SidebarProps>> = (props) => {
  const { id, className, children } = props;

  return (
    <aside id={id} className={cx(className)}>
      {children}
    </aside>
  );
};

Sidebar.defaultProps = {
  id: "app-root-sidebar"
};
