import { RootState } from "@/store";

export const selectBlogData = (state: RootState) => state.blog.data;
export const selectBlogLoading = (state: RootState) => state.blog.isLoading;
