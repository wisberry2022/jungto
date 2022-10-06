import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./module/history";
import reviewSlice from "./module/reviewSlice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    review: reviewSlice.reducer,
  }
});

export default store;