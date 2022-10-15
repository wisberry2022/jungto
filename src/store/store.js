import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import reviewReducer from './module/reviewSlice';
import historyReducer from './module/history';
import loginReducer from './module/loginSlice';
import trainReducer from './module/trainSlice';
import userReducer from './module/userSlice';
import applicateReducer from "./applicateSlice";

const reducers = combineReducers({
  review: reviewReducer,
  history: historyReducer,
  login: loginReducer,
  train: trainReducer,
  user: userReducer,
  application: applicateReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["login"],
  blacklist: ["review"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
})


export default store;