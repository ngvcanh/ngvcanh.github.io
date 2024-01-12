import { ClassValue } from "clsx";

export default function arrayClass(classes?: ClassValue | ClassValue[]) {
  return Array.isArray(classes) ? classes : [classes];
}