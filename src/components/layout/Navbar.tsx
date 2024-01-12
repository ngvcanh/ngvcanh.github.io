"use client";
import { FC } from "react";
import { useSelector } from "@/redux/store/store";
import { getScreenIsMobile } from "@/redux/slices/app/selector";
import clsx from "clsx";

const Navbar: FC = () => {
  const isMobile = useSelector(getScreenIsMobile);

  return (
    <aside className={clsx("fixed z-[9997] top-14 left-0 bottom-0 w-72 backdrop-blur-lg shadow-lg")}>
      Navbar
    </aside>
  );
};

export default Navbar;
