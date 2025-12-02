import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "@/type";

export const fetchHomeData = createAsyncThunk<ApiResponse>(
  "home/fetchHomeData",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false",
        { cache: "no-store" }
      );
      const data = (await res.json()) as ApiResponse;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
