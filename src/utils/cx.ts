import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type { ClassValue };

export function cx(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
