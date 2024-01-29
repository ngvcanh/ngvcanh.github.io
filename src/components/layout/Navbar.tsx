"use server";
import { FC } from "react";
import { NavbarItem } from "@/types/navbar";
import clsx from "clsx";
import NavItem from "../base/NavItem";
import Nav from "../base/Nav";

export interface NavbarProps {
  navbar: NavbarItem[];
}

const Navbar: FC<NavbarProps> = (props) => {
  const { navbar } = props;

  return (
    <aside className={clsx("fixed z-[9997] top-14 left-0 bottom-0 w-72 backdrop-blur-lg shadow-lg")}>
      <Nav className="h-full overflow-y-auto" listClass="py-2">
        {navbar.map(({children, ...nav}) => {
          return <NavItem
            key={nav.href}
            label={nav.label}
            leftIcon={nav.icon}
            href={nav.href}
            className="h-10 hover:bg-[0,0,0,0.2]"
            labelClass="text-white"
            leftIconClass="text-white"
          />
        })}
      </Nav>
    </aside>
  );
};

export default Navbar;
