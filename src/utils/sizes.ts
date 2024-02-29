import { SizeType } from "@/types/base";

export const sizeClasses: Record<string, Record<SizeType, string>> = {
  image: {
    xs: "w-[18px] h-[18px] min-w-[18px] min-h-[18px]",
    sm: "w-7 h-7 min-w-7 min-h-7",
    md: "w-[38px] h-[38px] min-w-[38px] min-h-[38px]",
    lg: "w-12 h-12 min-w-12 min-h-12",
    xl: "w-[58px] h-[58px] min-w-[58px] min-h-[58px]",
  },
}