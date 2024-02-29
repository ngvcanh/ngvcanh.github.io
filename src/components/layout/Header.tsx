import { FC } from "react";
import { IconChevronRight, IconHome } from "@tabler/icons-react";
import { NavbarItem } from "@/types/base";
import { Navbar } from "../base/Navbar";
import Link from "next/link";

export interface HeaderProps {
  id?: string;
}

export const headerClasses = {
  root: "Header-root",
  wrapper: "Header-wrapper",
  left: "Header-left",
  leftNav: "Header-leftNav"
}

const navbars: NavbarItem[] = [
  {
    label: "Learning",
    children: [
      {
        label: "HTML",
        href: "/learning/html",
        icon: IconChevronRight,
      },
      {
        label: "Rust",
        href: "/learning/rust",
        icon: IconChevronRight,
      }
    ],
  },
  {
    label: "Tools",
    children: [
      {
        label: "Social Preview",
        href: "/tools/social-preview",
        icon: IconChevronRight,
      }
    ]
  }
];

export const Header: FC<HeaderProps> = (props) => {
  const { id } = props;

  return (
    <header {...{id}} className={headerClasses.root}>
      <div className={headerClasses.wrapper}>
        <div className="h-full">
          <Link href="/" className="flex items-center h-full px-3 border-r border-slate-700 cursor-pointer hover:bg-slate-700 transition-all">
            <IconHome />
          </Link>
        </div>
        <Navbar
          navbar={navbars}
          className={[headerClasses.left, "px-4"]}
          listClass={headerClasses.leftNav}
          subClass={[
            "z-[9999] w-60 transition-all absolute -rotate-90 origin-top-left opacity-0 pointer-events-none",
            "bg-white left-0",
            "group-hover/parent:opacity-100 group-hover/parent:pointer-events-auto group-hover/parent:rotate-0",
          ]}
          subListClass="z-[9999] shadow-lg"
          itemHasSubClass="group/parent h-full relative"
          itemSubClass="group/item h-12 text-black"
          itemLinkSubClass="group-hover/item:text-yellow-500 group-hover/item:translate-x-1"
        />
      </div>
    </header>
  );
};

Header.defaultProps = {
  id: "app-root-header"
};
