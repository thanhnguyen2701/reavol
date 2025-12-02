import { RootState } from "@/redux/store";

export const selectRelatedBooks = (state: RootState) => state.bookRelated.related;

export const selectRelatedBooksLoading = (state: RootState) => state.bookRelated.isLoading;
