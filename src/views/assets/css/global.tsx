import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const globalStyles = makeStyles((theme: Theme) => {
  return {
    '@global': {
      '@global': {
        '*,*::before,*::after':{
          backfaceVisibility: 'hidden',
          perspective: 1000
        },
        'html,body,#root': {
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          fontSize: theme.typography.fontSize + 'px',
          fontFamily: theme.typography.fontFamily
        }
      }    
    }
  }
});

export default globalStyles;