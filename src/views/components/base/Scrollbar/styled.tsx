import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import { transition } from "views/assets/css/mixin";
import { ScrollbarElementProps, ScrollbarThumbProps, ScrollbarTrackProps } from "./types";

const TrackOptions = {
  shouldForwardProp: (prop: PropertyKey) => {
    return ([
      'renderStyle', 
      'variant', 
      'enabled',
      'autoHide',
    ] as PropertyKey[]).indexOf(prop) === -1
  }
}

export const ScrollbarView = styled(Box, {
  shouldForwardProp: prop => prop !== 'renderStyle'
})<Pick<ScrollbarElementProps, 'renderStyle'>>(({ renderStyle }) => {

  return {
    ...renderStyle
  }
});

export const Track = styled(Box, TrackOptions)<ScrollbarTrackProps>(({ 
  theme, renderStyle, variant, enabled, autoHide
}) => {

  return {
    ...renderStyle,
    width: 8,
    backgroundColor: 'transparent',
    borderRadius: 0,

    ...(variant === 'vertical' && {
      top: 0,
      bottom: 0,
      right: 0,
      ...transition(theme, ['left', 'right', 'opacity']),
    }),

    ...(variant === 'horizontal' && {
      left: 0,
      right: 0,
      bottom: 0,
      ...transition(theme, ['top', 'bottom', 'opacity']),
    }),

    ...(!autoHide && !enabled && {
      opacity: '0!important'
    })
  }
});

export const Thumb = styled(Box)<ScrollbarThumbProps>(({ renderStyle, variant }) => {

  return {
    ...renderStyle,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 'inherit',

    ...(variant === 'vertical' && {
      width: '100%'
    }),

    ...(variant === 'horizontal' && {
      height: '100%'
    })
  }
});
