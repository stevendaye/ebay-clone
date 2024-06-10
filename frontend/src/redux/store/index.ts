import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
