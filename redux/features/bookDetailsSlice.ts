import { BookDetailsResponse } from "@/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch chi tiết sách
export const fetchBookDetails = createAsyncThunk(
  "book/fetchBookDetails",
  async (id: number) => {
    const res = await fetch(
      `https://api.reavol.vn/api/v1/article/get-detail-article?articleId=${id}`,
      { cache: "no-store" }
    );

    const json = await res.json();
    return json as BookDetailsResponse;
  }
);

interface BookDetailsState {
  details: BookDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BookDetailsState = {
  details: null,
  isLoading: false,
};

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {
    clearBook(state) {
      state.details = null;
    },
  },
  extraReducers: (builder) => {
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
      });
  },
});

export const { clearBook } = bookDetailsSlice.actions;
export default bookDetailsSlice.reducer;
