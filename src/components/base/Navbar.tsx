import { FC, useMemo } from "react";
import { NavbarItem } from "@/types/base";
import { ClassValue } from "@/utils/cx";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

export interface NavbarProps {
  navbar: NavbarItem[];
  deep?: number;
  className?: ClassValue;
  listClass?: ClassValue;
  subClass?: ClassValue;
  subListClass?: ClassValue;
  itemClass?: ClassValue;
  itemLinkClass?: ClassValue;
  itemHasSubClass?: ClassValue;
  itemLinkHasSubClass?: ClassValue;
  itemSubClass?: ClassValue;
  itemLinkSubClass?: ClassValue;
  keyExtractor?: (params: { item: NavbarItem; index: number; deep: number; }) => string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {
    className,
    listClass,
    subClass,
    subListClass,
    itemClass,
    itemLinkClass,
    itemHasSubClass,
    itemLinkHasSubClass,
    itemSubClass,
    itemLinkSubClass,
    navbar,
    deep = 0,
    keyExtractor = ({ index }) => index.toString(),
  } = props;

  const currentNavbar = useMemo(() => navbar, [navbar]);

  const isSub = deep > 0;
  const navClass = isSub ? subClass : className;
  const navListClass = isSub ? subListClass : listClass;

  return (
    <Nav className={navClass} listClass={navListClass} component={isSub ? "div" : "nav"}>
      {currentNavbar.map((item, index) => (
        item.children?.length
          ? (
            <NavItem
              key={keyExtractor({ item, index, deep })}
              label={item.label}
              dropdown
              href={item.href}
              leftIcon={item.icon}
              className={isSub ? itemSubClass : itemHasSubClass}
              labelClass={isSub ? itemLinkSubClass : itemLinkHasSubClass}
            >
              <Navbar
                navbar={item.children}
                deep={deep + 1}
                {...{
                  subClass,
                  subListClass,
                  itemClass,
                  itemLinkClass,
                  itemHasSubClass,
                  itemLinkHasSubClass,
                  itemSubClass,
                  itemLinkSubClass
                }}
              />
            </NavItem>
          )
          : (
            <NavItem
              key={keyExtractor({ item, index, deep })}
              label={item.label}
              leftIcon={item.icon}
              href={item.href}
              className={isSub ? itemSubClass : itemClass}
              linkClass={isSub ? itemLinkSubClass : itemLinkClass}
            />
          )
      ))}
    </Nav>
  );
}
