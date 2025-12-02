import { RootState } from "@/redux/store";

export const selectBlogData = (state: RootState) => state.blog.data;
export const selectBlogLoading = (state: RootState) => state.blog.isLoading;
