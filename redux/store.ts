import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice";
import blogDetailsReducer from "./features/blogDetailsSlice";
import blogReducer from "./features/blogSlice";
import bookDetailsReducer from "./features/bookDetailsSlice";
import bookRelatedReducer from "./features/bookRelatedSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    bookDetails: bookDetailsReducer,
    bookRelated: bookRelatedReducer,
    blogDetails: blogDetailsReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
