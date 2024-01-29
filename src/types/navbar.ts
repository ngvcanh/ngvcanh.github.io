import { TablerIconsProps } from "@tabler/icons-react";
import { ReactNode } from "react";

export type NavbarIconComponent = (props: TablerIconsProps) => JSX.Element;

export interface NavbarItem {
  label: ReactNode;
  icon?: NavbarIconComponent;
  href?: string;
  children?: NavbarItem[];
}
