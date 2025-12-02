import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { homeReducer } from "../api/home/reducer";
import { blogDetailsReducer } from "@/api/blogDetails/reducer";
import { blogReducer } from "@/api/blog/reducer";
import { bookDetailsReducer } from "@/api/bookDetails";
import { bookRelatedReducer } from "@/api/bookRelated";


const rootReducer = combineReducers({
  home: homeReducer,
  bookDetails: bookDetailsReducer,
  bookRelated: bookRelatedReducer,
  blogDetails: blogDetailsReducer,
  blog: blogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
