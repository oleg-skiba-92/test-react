// @flow
import {combineReducers} from "redux";

import {newsReducer} from "./news.reducer";
import userReducer from "./auth.reducer";
import type {TStoreState} from "../types/state/TStoreState";

export const reducers: TStoreState = combineReducers({
  news: newsReducer,
  user: userReducer,
});