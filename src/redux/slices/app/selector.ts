import { RootState } from "@/redux/store/store";

export const getScreenIsMobile = (state: RootState) => state.app.screen.isMobile;