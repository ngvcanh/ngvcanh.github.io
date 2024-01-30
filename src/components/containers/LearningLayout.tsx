import { AppLayout, NavbarItem } from "@/types/base";
import { CommonLayout } from "./CommonLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { NavItem } from "@/components/base/NavItem";
import { Nav } from "../base/Nav";

export interface LearningLayoutProps {
  navbar: NavbarItem[];
}

export const LearningLayout: AppLayout<LearningLayoutProps> = (page, pageProps) => CommonLayout(
  <>
    <Sidebar>
      <Nav>
        {pageProps?.navbar.map((nav, index) => (
          <NavItem key={index} label={nav.label} href={nav.href} leftIcon={nav.icon} />
        ))}
      </Nav>
    </Sidebar>
    {page}
  </>,
  pageProps
);