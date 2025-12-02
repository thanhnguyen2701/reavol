import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { RelatedBooksDataResponse } from "@/type";

export const fetchRelatedBooks = createAsyncThunk<RelatedBooksDataResponse, number>(
  "book/fetchRelatedBooks",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://api.reavol.vn/api/v1/article/get-related-article?articleId=${id}`,
        { cache: "no-store" }
      );
      const data = (await res.json()) as RelatedBooksDataResponse;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const clearBook = createAction("book/clearRelatedBook");
