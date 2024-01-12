import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppScreenState {
  isMobile: boolean;
}

export interface AppState {
  screen: AppScreenState;
}

const initialState: AppState = {
  screen: {
    isMobile: true,
  }
};

const appSlice = createSlice({
  name: "@ngvcanh/app",
  initialState,
  reducers: {
    setIsMobile(state, actions: PayloadAction<boolean>) {
      state.screen.isMobile = actions.payload;
    }
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
