import { PostItemInterface } from "@/types/base";
import { rustContents, rustPosts } from "./rust";

export const posts: Record<string, PostItemInterface[]> = {
  '/learning/rust': rustPosts
};

export const PostContents = {
  ...rustContents
};
