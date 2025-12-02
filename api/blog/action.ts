import { BlogResponse } from "@/type/blog";

export const FETCH_BLOG_REQUEST = "blog/FETCH_BLOG_REQUEST";
export const FETCH_BLOG_SUCCESS = "blog/FETCH_BLOG_SUCCESS";
export const FETCH_BLOG_FAILURE = "blog/FETCH_BLOG_FAILURE";

export const fetchBlogRequest = () => ({
  type: FETCH_BLOG_REQUEST as typeof FETCH_BLOG_REQUEST,
});

export const fetchBlogSuccess = (data: BlogResponse) => ({
  type: FETCH_BLOG_SUCCESS as typeof FETCH_BLOG_SUCCESS,
  payload: data,
});

export const fetchBlogFailure = () => ({
  type: FETCH_BLOG_FAILURE as typeof FETCH_BLOG_FAILURE,
});

// --- Thunk fetch API ---
export const fetchBlogData = () => async (dispatch: any) => {
  dispatch(fetchBlogRequest());

  try {
    const res = await fetch(
      "https://api.reavol.vn/api/v1/blog/get-blog-for-web",
      { cache: "no-store" }
    );

    const json = (await res.json()) as BlogResponse;

    dispatch(fetchBlogSuccess(json));
  } catch (error) {
    dispatch(fetchBlogFailure());
  }
};
