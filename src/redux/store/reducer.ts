import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "@/redux/slices/app/reducer";

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
