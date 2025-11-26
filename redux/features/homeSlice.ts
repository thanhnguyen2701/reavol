import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "@/type";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const res = await fetch(
      "https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false",
      { cache: "no-store" }
    );
    const json = await res.json();
    return json as ApiResponse;
  }
);

interface HomeState {
  data: ApiResponse | null;
  isLoading: boolean;
}

const initialState: HomeState = {
  data: null,
  isLoading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default homeSlice.reducer;
