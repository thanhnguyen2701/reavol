import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { BlogDetailsResponse } from "@/type/blog";

export const fetchBlogDetails = createAsyncThunk<BlogDetailsResponse, string>(
  "blogDetails/fetchBlogDetails",
  async (slug, thunkAPI) => {
    try {
      const res = await fetch(
        `https://api.reavol.vn/api/v1/blog/detail/${slug}`,
        { cache: "no-store" },
      );
      const data = (await res.json()) as BlogDetailsResponse;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const clearBlogDetails = createAction("blogDetails/clearBlogDetails");
