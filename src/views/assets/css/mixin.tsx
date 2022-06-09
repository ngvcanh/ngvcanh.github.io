import { Theme } from "@mui/material/styles";
import { Property } from 'csstype';

export const transition = (theme: Theme, name: string | string[]) => {
  return {
    transition: theme.transitions.create(name, {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }) as Property.Transition,
  }
}
