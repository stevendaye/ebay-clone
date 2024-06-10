import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import toastReducer from "./toast";

const rootReducer = combineReducers({
  authState: authReducer,
  toastState: toastReducer,
});

export default rootReducer;
