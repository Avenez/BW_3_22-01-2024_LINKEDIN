import { combineReducers, configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../reducer/friends";
import { thunk } from "redux-thunk";

const bigReducer = combineReducers({
  friends: friendsReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
