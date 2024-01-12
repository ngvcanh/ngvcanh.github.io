import { FC, ReactNode } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import NavItem, { NavItemProps } from "@/components/base/NavItem";
import Nav from "@/components/base/Nav";
import * as PageURL from "@/utils/PageURL";

export interface NavbarItem {
  label: ReactNode;
  icon?: NavItemProps['leftIcon'];
  href?: string;
  children?: NavbarItem[];
}

const navbars: NavbarItem[] = [
  {
    label: "Tools",
    children: [
      {
        label: "Social preview",
        icon: IconChevronRight,
        href: PageURL.TOOLS_SOCIALS_PREVIEW,
      },
      {
        label: "Social preview",
        icon: IconChevronRight,
      },
      {
        label: "Social preview",
        icon: IconChevronRight,
      },
      {
        label: "Social preview",
        icon: IconChevronRight,
      },
      {
        label: "Social preview",
        icon: IconChevronRight,
      },
    ]
  }
];

const Header: FC = () => {
  return (
    <header className="h-14 backdrop-blur-lg fixed inset-0 shadow-lg text-white z-[9999]">
      <Nav
        className="h-full px-4"
        listClass="flex items-center h-full"
      >
        {navbars.map((navbar, index) => (
          navbar.children?.length
            ? (
              <NavItem
                key={index}
                label={navbar.label}
                dropdown className="group/parent h-full"
                href={navbar.href}
              >
                <Nav
                  component="div"
                  className={clsx(
                    "z-[9999] w-60 transition-all absolute -rotate-90 origin-top-left",
                    "opacity-0 pointer-events-none", // before hover
                    "group-hover/parent:opacity-100 group-hover/parent:mt-0 group-hover/parent:pointer-events-auto group-hover/parent:rotate-0" // after hover
                  )}
                  listClass="z-[9999] shadow-white-lg"
                >
                  {navbar.children.map((nav, ci) => (
                    <NavItem
                      key={`${index}-${ci}`}
                      label={nav.label}
                      leftIcon={nav.icon}
                      className="group/item h-12 bg-gradient"
                      linkClass="group-hover/item:text-yellow-500 group-hover/item:translate-x-1"
                      href={nav.href}
                    />
                  ))}
                </Nav>
              </NavItem>
            )
            : <NavItem key={index} label={navbar.label} leftIcon={navbar.icon} />
        ))}
      </Nav>
    </header>
  );
};

export default Header;
