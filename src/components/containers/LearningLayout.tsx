import { AppLayout, NavbarItem } from "@/types/base";
import { CommonLayout } from "./CommonLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { NavItem } from "@/components/base/NavItem";

export interface LearningLayoutProps {
  navbar: NavbarItem[];
}

export const LearningLayout: AppLayout<LearningLayoutProps> = (page, pageProps) => CommonLayout(
  <>
    <Sidebar>
      {pageProps?.navbar.map((nav, index) => (
        <NavItem key={index} label={nav.label} href={nav.href} leftIcon={nav.icon} />
      ))}
    </Sidebar>
    {page}
  </>,
  pageProps
);