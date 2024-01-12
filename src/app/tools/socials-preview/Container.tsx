"use client";
import { ChangeEvent, FC, useState } from "react";
import { IconArrowRight, IconCircleX } from "@tabler/icons-react";
import { useSelector } from "@/redux/store/store";
import { getScreenIsMobile } from "@/redux/slices/app/selector";
import clsx from "clsx";
import Main from "@/components/layout/Main";
import ButtonInput from "./ButtonInput";
import ShareCard from "./ShareCard";

const ToolsSocialsPreview: FC = () => {
  const [value, setValue] = useState('');
  const isMobile = useSelector(getScreenIsMobile);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleClear = () => setValue("");

  return (
    <Main>
      <div className="flex justify-center w-full">
        <div className="relative h-16 md:h-[4.5rem] w-full md:w-[43.75rem] transition-all">
          <input
            className={clsx(
              "h-full w-full rounded-full outline-0 text-xl truncate",
              "bg-sky-800 border border-sky-700 text-white pl-4 transition-all",
              "placeholder:text-sky-600 focus:bg-sky-800 border-sky-800 focus:text-sky-300",
              !!value ? "pr-[8.5rem]" : "pr-4"
            )}
            value={value}
            onChange={handleChange}
            placeholder="yourwebsite.com"
          />
          <div
            className={clsx(
              "flex items-center justify-end h-full absolute top-0 transition-all pr-2",
              !!value ? "right-0 opacity-100 pointer-events-auto" : "-right-6 opacity-0 pointer-events-none"
            )}
          >
            <ButtonInput onClick={handleClear}>
              <IconCircleX size={isMobile ? 32 : 40} className="transition-all" />
            </ButtonInput>
            <ButtonInput>
              <IconArrowRight size={isMobile ? 32 : 40} className="transition-all" />
            </ButtonInput>
          </div>
        </div>
      </div>
      <ShareCard
        className="mt-8"
        page={{
          domain: "https://seeker.vl24hv2.staging.sieuviet-team.com"
        }}
      />
    </Main>
  )
}

export default ToolsSocialsPreview;
