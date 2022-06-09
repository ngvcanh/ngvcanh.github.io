import { CSSProperties, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { BoxProps } from "@mui/material/Box";
import Scrollbars, { positionValues } from "react-custom-scrollbars-2";

export interface ScrollbarElementProps{
  renderStyle: CSSProperties;
  variant: 'vertical' | 'horizontal';
}

export interface ScrollbarElementRenderProps{
  style: CSSProperties;
}

export interface ScrollbarTrackProps extends BoxProps, ScrollbarElementProps{
  enabled: boolean;
  autoHide: boolean;
}

export interface ScrollbarThumbProps extends ScrollbarElementProps{}

export interface ScrollbarRef{
  container: Scrollbars | null;
  horizontalTrack: HTMLDivElement | null;
  horizontalThumb: HTMLDivElement | null;
  verticalTrack: HTMLDivElement | null;
  verticalThumb: HTMLDivElement | null;
}

export interface ScrollbarProps{
  className?: string;
  style?: CSSProperties,
  width?: string | number;
  height?: string | number;
  autoHide?: boolean;
  onStop?(values: positionValues): void;
  onUpdate?(values: positionValues): void;
}

export interface ScrollbarComponent extends ForwardRefRenderFunction<ScrollbarRef, PropsWithChildren<ScrollbarProps>>{}