import { createReducer } from "@reduxjs/toolkit";
import { fetchBlogData } from "./action";
import { BlogResponse } from "@/type/blog";

export interface BlogState {
  data: BlogResponse | null;
  isLoading: boolean;
}

const initialState: BlogState = {
  data: null,
  isLoading: false,
};

export const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBlogData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBlogData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchBlogData.rejected, (state) => {
      state.isLoading = false;
    });
});
