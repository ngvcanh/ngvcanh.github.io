import { FC, memo } from "react";
import globalStyles from "views/assets/css/global";

const GlobalCss: FC = () => {

  globalStyles();

  return null;

}

export default memo(GlobalCss);