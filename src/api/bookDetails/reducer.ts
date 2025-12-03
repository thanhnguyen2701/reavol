import { createReducer } from "@reduxjs/toolkit";
import { fetchBookDetails, clearBook } from "./action";
import { BookDetailsResponse } from "@/type";

export interface BookDetailsState {
  details: BookDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BookDetailsState = {
  details: null,
  isLoading: false,
};

export const bookDetailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBookDetails.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    })
    .addCase(fetchBookDetails.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(clearBook, (state) => {
      state.details = null;
    });
});
