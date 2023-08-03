import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    data: todos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
