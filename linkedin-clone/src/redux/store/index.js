import { combineReducers, configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../reducer/friends";
import { thunk } from "redux-thunk";
import { profileReducer } from "../reducer/profile";
import isLoadingReducer from "../reducer/isLoading";

const bigReducer = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  isLoading: isLoadingReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
