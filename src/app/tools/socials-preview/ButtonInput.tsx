import { FC, MouseEvent, PropsWithChildren } from "react";
import clsx, { ClassValue } from "clsx";
import arrayClass from "@/utils/arrayClass";

export interface ButtonInputProps {
  className?: ClassValue | ClassValue[];
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
}

const ButtonInput: FC<PropsWithChildren<ButtonInputProps>> = props => {
  const { className, children, onClick } = props;

  return (
    <button
      className={clsx(
        "flex items-center justify-center transition-all w-12",
        "h-full outline-0 rounded-full hover:text-sky-300",
        ...arrayClass(className)
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonInput;
