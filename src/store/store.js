import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./module/history";
import reviewSlice from "./module/reviewSlice";
import loginSlice from "./module/loginSlice";

const store = configureStore({
  reducer: {
    history: historySlice.reducer,
    review: reviewSlice.reducer,
    login: loginSlice.reducer,
  }
});


export default store;