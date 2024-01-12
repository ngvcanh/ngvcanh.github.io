"use client";
import { FC } from "react";
import { useDispatch, useSelector } from "@/redux/store/store";
import { getScreenIsMobile } from "@/redux/slices/app/selector";
import useWindowResize from "@/hooks/useWindowResize";
import { appActions } from "@/redux/slices/app/reducer";

const breakpoints = {
  md: 768,
};

const WindowResponsive: FC = () => {

  const isMobile = useSelector(getScreenIsMobile);
  const dispatch = useDispatch();

  const size = useWindowResize(() => {
    if (size[0] < breakpoints.md) {
      isMobile || dispatch(appActions.setIsMobile(true));
    }
    else {
      isMobile && dispatch(appActions.setIsMobile(false));
    }
  });

  return null;
};

export default WindowResponsive;
