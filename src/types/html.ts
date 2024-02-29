import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ClassValue } from "clsx";

type BaseHTMLProps<Element extends HTMLElement = HTMLElement> = DetailedHTMLProps<HTMLAttributes<Element>, Element>;

export interface HTMLProps<Element extends HTMLElement = HTMLElement>
  extends Omit<BaseHTMLProps<Element>, "className"> {
    className?: ClassValue;
  }
