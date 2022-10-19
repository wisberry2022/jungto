import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import reviewReducer from './module/reviewSlice';
import historyReducer from './module/history';
import loginReducer from './module/loginSlice';
import trainReducer from './module/trainSlice';
import applicateReducer from "./module/applicateSlice";
import userdataReducer from "./module/userdataSlice";
import appReducer from "./module/appSlice";
import trainTypeReducer from "./module/trainTypeSlice";

const reducers = combineReducers({
  review: reviewReducer,
  history: historyReducer,
  login: loginReducer,
  train: trainReducer,
  app: appReducer,
  application: applicateReducer,
  userdata: userdataReducer,
  traintype: trainTypeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["login", "userdata"],
  blacklist: ["review",]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
})


export default store;