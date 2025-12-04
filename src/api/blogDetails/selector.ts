// blogDetails/selector.ts
import { RootState } from "@/store";

export const selectBlogDetails = (state: RootState) => state.blogDetails.details;
export const selectBlogDetailsLoading = (state: RootState) => state.blogDetails.isLoading;
