import { MouseEvent, PropsWithChildren, ReactNode, forwardRef } from "react";
import { IconCaretDownFilled, TablerIconsProps } from "@tabler/icons-react";
import clsx, { ClassValue } from "clsx";
import Link from "next/link";
import arrayClass from "@/utils/arrayClass";

export interface NavItemProps {
  leftIcon?: (props: TablerIconsProps) => JSX.Element;
  leftIconSize?: number;
  label: ReactNode;
  className?: ClassValue | ClassValue[];
  linkClass?: ClassValue | ClassValue[];
  labelClass?: ClassValue | ClassValue[];
  leftIconClass?: ClassValue | ClassValue[];
  href?: string;
  onClick?(e: MouseEvent<HTMLAnchorElement>): void;
  dropdown?: boolean;
}

export const NAV_ITEM_DEFAULT_LEFT_ICON_SIZE = 16;

const NavItem = forwardRef<HTMLLIElement, PropsWithChildren<NavItemProps>>(
  function NavItem(props, ref) {
    const {
      leftIcon: LeftIcon,
      leftIconSize = NAV_ITEM_DEFAULT_LEFT_ICON_SIZE,
      label,
      className,
      linkClass,
      labelClass,
      leftIconClass,
      href = "#",
      onClick,
      dropdown,
      children,
    } = props;

    const spanClass = Array.isArray(labelClass) ? labelClass : [labelClass];
    const leftSvgClass = Array.isArray(leftIconClass) ? leftIconClass : [leftIconClass];
  
    return (
      <li ref={ref} className={clsx("px-2", ...arrayClass(className))}>
        <Link
          href={href}
          className={clsx(
            "flex items-center gap-2 h-full cursor-pointer transition-all",
            ...arrayClass(linkClass),
          )}
          onClick={onClick}
        >
          {!!LeftIcon && (
            <LeftIcon
              size={leftIconSize}
              className={clsx(
                "group-hover/item:translate-x-1 transition-all",
                ...arrayClass(leftIconClass)
              )}
            />
          )}
          {['string', 'number', 'object', 'boolean'].includes(typeof label)
            ? (
              <span className={clsx("whitespace-nowrap transition-all", ...arrayClass(labelClass))}>
                {label}
              </span>
            )
            : label
          }
          {dropdown && <IconCaretDownFilled size={16} />}
        </Link>
        {children}
      </li>
    );
  },
);

export default NavItem;
