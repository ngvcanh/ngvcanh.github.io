"use client";

import { MouseEvent, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navbars = [
  {
    title: "Database",
    href: "/database",
    children: [
      {
        title: "MySQL",
        href: "/database/mysql",
      },
      {
        title: "PostgreSQL",
        href: "/database/postgresql",
      },
    ],
  },
  {
    title: "Frontend",
    href: "/frontend",
    children: [
      {
        title: "React",
        href: "/frontend/react",
      },
      {
        title: "Vue",
        href: "/frontend/vue",
      },
    ],
  }
];

type NavItem = typeof navbars[number];

export function Navbar() {
  const indicator = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLUListElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (nav: NavItem) => (e: MouseEvent<HTMLAnchorElement>) => {
    nav.children?.length && e.preventDefault();
  };

  const handleMouseOver = (index: number) => () => {
    if (!indicator.current || !container.current) {
      return;
    }

    const children = Array.from(container.current.children) as HTMLLIElement[];
    const item = children[index].children[0] as HTMLAnchorElement;

    const length = children.length;
    const itemWidth = item.offsetWidth;

    let rightWidth = 0;

    if (index < length - 1) {
      for (let i = index + 1; i < length; i++) {
        rightWidth += children[i].children[0].clientWidth;
      }
    }

    indicator.current.style.right = `${rightWidth - 12}px`;
    indicator.current.style.width = `${itemWidth}px`;
  };

  const handleMouseLeave = () => {
    if (!indicator.current) {
      return;
    }

    indicator.current.style.width = "0px";
  };

  const handleOpenMobileMenu = () => setIsOpen(true);
  const handleCloseMobileMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className="w-9 h-9 flex lg:hidden items-center justify-center bg-cyan-300/20 text-cyan-500 rounded-full"
        onClick={handleOpenMobileMenu}
      >
        <Menu size={20} strokeWidth={2} />
      </button>
      <nav
        className={cn(
          "flex-grow w-full fixed lg:relative inset-y-0 h-screen lg:h-full lg:inset-y-auto lg:left-auto flex lg:block",
          "justify-end transition-[left] duration-200",
          isOpen ? "left-0" : "left-full",
        )}
      >
        <div
          className="absolute inset-0 bg-black/20 pointer-events-auto lg:pointer-events-none"
          onClick={handleCloseMobileMenu}
        />
        <div
          ref={indicator}
          className="hidden lg:block bg-cyan-300/30 absolute inset-y-0 -right-3 transition-[right] duration-100 pointer-events-none"
        />
        <ul 
          ref={container}
          className={cn(
            "block lg:flex justify-end items-center h-full overflow-y-auto lg:overflow-y-hidden w-80 lg:w-full -mr-3",
            "bg-slate-950 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border-l lg:border-l-0",
            "border-slate-700 lg:border-transparent",
          )}
        >
          {navbars.map((navbar, index) => {
            const children = navbar.children || [];
            const hasSubmenu = !!children.length;

            return (
              <li
                key={index}
                className={cn("h-auto lg:h-full", {
                  "relative group/submenu": hasSubmenu,
                })}
              >
                <Link
                  href={navbar.href}
                  className="inline-flex items-center gap-1 h-12 w-full lg:w-auto lg:h-full text-[13px] font-semibold px-3 hover:text-cyan-500"
                  onClick={handleClick(navbar)}
                  onMouseOver={handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>{navbar.title}</span>
                  {hasSubmenu && <ChevronDown size={12} strokeWidth={2} />}
                </Link>
                {hasSubmenu && (
                  <div
                    className={cn(
                      "relative lg:absolute top-full right-0 w-80 lg:w-54 pt-[10px] transition-all transform translate-y-0 lg:translate-y-10",
                      "opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none",
                      "group-hover/submenu:translate-y-0 group-hover/submenu:opacity-100 group-hover/submenu:pointer-events-auto",
                    )}
                  >
                    <ul
                      className={cn(
                        "bg-slate-950/40 backdrop-blur-lg border border-slate-800 rounded-md relative",
                        "py-2 pl-6 lg:pl-0 before:absolute before:top-[-7px] before:bg-slate-950/40 before:transform before:rotate-45",
                        "before:right-3 before:h-3 before:w-3 before:border-l before:border-t before:border-slate-800",
                      )}
                    >
                      {children.map((child, indexChild) => (
                        <li key={indexChild}>
                          <Link 
                            href={child.href}
                            className={cn(
                              "px-4 flex items-center w-full h-10 text-sm font-medium relative transition-colors group",
                              "before:absolute before:inset-y-0 before:left-0 before:w-0 before:h-full before:bg-cyan-100/20",
                              "before:backdrop-blur-lg before:transition-[width] hover:before:w-full",
                            )}
                          >
                            <span className="relative group-hover:text-cyan-500">
                              {child.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
