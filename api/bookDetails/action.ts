import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { BookDetailsResponse } from "@/type";

export const fetchBookDetails = createAsyncThunk<BookDetailsResponse, number>(
  "book/fetchBookDetails",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://api.reavol.vn/api/v1/article/get-detail-article?articleId=${id}`,
        { cache: "no-store" },
      );
      const data = (await res.json()) as BookDetailsResponse;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const clearBook = createAction("book/clearBook");
