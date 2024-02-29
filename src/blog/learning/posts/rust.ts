import { MDXComponent, PostItemInterface } from "@/types/base";
import Introduce from "./rust/introduce.mdx";

export const rustPosts: PostItemInterface[] = [
  {
    url: "/learning/rust/introduce",
    name: "Rust Introduce",
    summary: "",
    image: "/images/rust.svg",
  },
];

export const rustContents: Record<string, MDXComponent> = {
  "/learning/rust/introduce": Introduce,
};
