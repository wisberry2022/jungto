import { configureStore } from "@reduxjs/toolkit";
// import historySlice from "./module/history";
// import reviewSlice from "./module/reviewSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import reviewReducer from './module/reviewSlice';
import historyReducer from './module/history';
import loginReducer from './module/loginSlice';


const reducers = combineReducers({
  review: reviewReducer,
  history: historyReducer,
  login: loginReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["login"],
  blacklist: ["review"]
};

const persistedReducer = persistReducer(persistConfig, reducers);


// const store = configureStore({
//   reducer: {
//     history: historySlice.reducer,
//     review: reviewSlice.reducer,
//   }
// });

const store = configureStore({
  reducer: persistedReducer,
})


export default store;