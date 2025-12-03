import { createReducer } from "@reduxjs/toolkit";
import { fetchBlogDetails, clearBlogDetails } from "./action";
import { BlogDetailsResponse } from "@/type/blog";

export interface BlogDetailsState {
  details: BlogDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BlogDetailsState = {
  details: null,
  isLoading: false,
};

export const blogDetailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBlogDetails.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBlogDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    })
    .addCase(fetchBlogDetails.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(clearBlogDetails, (state) => {
      state.details = null;
    });
});
