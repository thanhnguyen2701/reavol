import { RootState } from "@/redux/store";

export const selectBookDetails = (state: RootState) =>
  state.bookDetails.details;

export const selectBookLoading = (state: RootState) =>
  state.bookDetails.isLoading;
