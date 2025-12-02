import { createReducer } from "@reduxjs/toolkit";
import { fetchRelatedBooks, clearBook } from "./action";
import { RelatedBooksDataResponse } from "@/type";

interface BookRelatedState {
  related: RelatedBooksDataResponse | null;
  isLoading: boolean;
}

const initialState: BookRelatedState = {
  related: null,
  isLoading: false,
};

export const bookRelatedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRelatedBooks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchRelatedBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.related = action.payload;
    })
    .addCase(fetchRelatedBooks.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(clearBook, (state) => {
      state.related = null;
    });
});
