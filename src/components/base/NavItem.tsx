import { MouseEvent, PropsWithChildren, ReactNode, forwardRef } from "react";
import { ClassValue, cx } from "@/utils/cx";
import { NavbarIconComponent } from "@/types/base";
import { HTMLProps } from "@/types/html";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Link from "next/link";

export interface NavItemProps extends Omit<HTMLProps<HTMLLIElement>, 'className' | 'onClick'> {
  className?: ClassValue;
  leftIcon?: NavbarIconComponent;
  leftIconSize?: number;
  label: ReactNode;
  linkClass?: ClassValue;
  labelClass?: ClassValue;
  leftIconClass?: ClassValue;
  href?: string;
  onClick?(e: MouseEvent<HTMLAnchorElement>): void;
  dropdown?: boolean;
}

export const NAV_ITEM_DEFAULT_LEFT_ICON_SIZE = 16;

export const NavItem = forwardRef<HTMLLIElement, PropsWithChildren<NavItemProps>>(
  function NavItem(props, ref) {
    const {
      children,
      className,
      href = "#",
      linkClass,
      leftIcon: LeftIcon,
      leftIconSize = NAV_ITEM_DEFAULT_LEFT_ICON_SIZE,
      leftIconClass,
      label,
      labelClass,
      dropdown,
      onClick,
      ...rest
    } = props;

    return (
      <li {...rest} ref={ref} className={cx("px-2", className)}>
        <Link
          href={href}
          onClick={onClick}
          className={cx("flex items-center gap-2 h-full cursor-pointer transition-all", linkClass)}
        >
          {!!LeftIcon && (
            <LeftIcon
              size={leftIconSize}
              className={cx(
                "group-hover/item:translate-x-1 transition-all",
                leftIconClass
              )}
            />
          )}
          {['string', 'number', 'object', 'boolean'].includes(typeof label)
            ? (
              <span className={cx("whitespace-nowrap transition-all tracking-wider", labelClass)}>
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
  }
);