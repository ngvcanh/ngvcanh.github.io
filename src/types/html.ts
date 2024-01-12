import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HTMLProps<Element extends HTMLElement = HTMLElement>
  extends DetailedHTMLProps<HTMLAttributes<Element>, Element> {}
