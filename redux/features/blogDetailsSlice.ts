import { BlogDetailsResponse } from "@/type/blog";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogDetails = createAsyncThunk(
  "blog/fetchBlogDetails",
  async (slug: string) => {
    const res = await fetch(
      `https://api.reavol.vn/api/v1/blog/detail/${slug}`,
      { cache: "no-store" },
    );

    const json = await res.json();
    return json as BlogDetailsResponse;
  },
);

interface BlogDetailsState {
  details: BlogDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BlogDetailsState = {
  details: null,
  isLoading: false,
};

const BlogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {
    clearBlog(state) {
      state.details = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(fetchBlogDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearBlog } = BlogDetailsSlice.actions;
export default BlogDetailsSlice.reducer;
