import { RootState } from "@/redux/store";

export const selectHomeData = (state: RootState) => state.home.data;
export const selectHomeLoading = (state: RootState) => state.home.isLoading;
