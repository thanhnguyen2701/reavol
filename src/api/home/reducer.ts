import { createReducer } from "@reduxjs/toolkit";
import { fetchHomeData } from "./action";
import { ApiResponse } from "@/type";

interface HomeState {
  data: ApiResponse | null;
  isLoading: boolean;
}

const initialState: HomeState = {
  data: null,
  isLoading: false,
};

export const homeReducer = createReducer(initialState, (builder) => {
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
});
