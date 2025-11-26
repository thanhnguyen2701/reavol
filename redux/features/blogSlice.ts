import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BlogResponse } from "@/type/blog";

export const fetchBlogData = createAsyncThunk(
  "blog/fetchBlogData",
  async () => {
    const res = await fetch(
      "https://api.reavol.vn/api/v1/blog/get-blog-for-web",
      { cache: "no-store" }
    );
    const json = await res.json();
    return json as BlogResponse;
  }
);

interface BlogState {
  data: BlogResponse | null;
  isLoading: boolean;
}

const initialState: BlogState = {
  data: null,
  isLoading: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default blogSlice.reducer;
