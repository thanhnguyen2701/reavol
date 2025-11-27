import { RelatedBooksDataResponse } from "@/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRelatedBooks = createAsyncThunk(
  "book/fetchRelatedBooks",
  async (id: number) => {
    const res = await fetch(
      `https://api.reavol.vn/api/v1/article/get-related-article?articleId=${id}`,
      { cache: "no-store" },
    );
    const json = await res.json();
    return json as RelatedBooksDataResponse;
  },
);

interface BookRelatedState {
  related: RelatedBooksDataResponse | null;
  isLoading: boolean;
}

const initialState: BookRelatedState = {
  related: null,
  isLoading: false,
};

const bookRelatedSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearBook(state) {
      state.related = null;
    },
  },
  extraReducers: (builder) => {
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
      });
  },
});

export const { clearBook } = bookRelatedSlice.actions;
export default bookRelatedSlice.reducer;
