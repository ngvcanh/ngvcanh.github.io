import { NavbarItem } from "@/types/navbar";
import { IconChevronRight } from "@tabler/icons-react";
import * as PageURL from "@/utils/PageURL";

export const learningNavbars: NavbarItem[] = [
  {
    label: "HTML",
    href: PageURL.LEARNING_HTML,
    icon: IconChevronRight,
  },
  {
    label: "CSS",
    href: PageURL.LEARNING_CSS,
    icon: IconChevronRight,
  },
  {
    label: "JavaScript",
    href: PageURL.LEARNING_JAVASCRIPT,
    icon: IconChevronRight,
  },
  {
    label: "Rust",
    href: PageURL.LEARNING_RUST,
    icon: IconChevronRight,
  }
];