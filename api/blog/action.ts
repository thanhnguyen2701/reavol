import { createAsyncThunk } from "@reduxjs/toolkit";
import { BlogResponse } from "@/type/blog";

export const fetchBlogData = createAsyncThunk<BlogResponse>(
  "blog/fetchBlogData",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://api.reavol.vn/api/v1/blog/get-blog-for-web", {
        cache: "no-store",
      });
      const data = (await res.json()) as BlogResponse;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
