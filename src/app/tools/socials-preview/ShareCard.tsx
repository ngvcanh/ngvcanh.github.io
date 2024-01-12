import { FC } from "react";
import clsx, { ClassValue } from "clsx";
import arrayClass from "@/utils/arrayClass";

export interface ShareCardProps {
  className?: ClassValue | ClassValue[];
  loading?: boolean;
  page?: any;
}

const ShareCard: FC<ShareCardProps> = props => {
  const { className, page, loading = true } = props;

  return (
    <div className={clsx("flex justify-center", ...arrayClass(className))}>
      <div className="flex flex-col justify-between w-[37.5rem] h-[25rem] bg-white shadow-lg">
        <div></div>
        <div className="border-t border-gray-200 bg-gray-200 h-[5rem]">
          {loading
            ? (
              <div className="flex items-center w-full h-full px-4">
                <strong className="text-xl text-gray-900">Loading...</strong>
              </div>
            )
            : (
              <div className="flex flex-col">
                <div>
                  {page?.domain}
                </div>
                <div>
                  {page?.title}
                </div>
                <div>
                  {page?.description}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ShareCard;
