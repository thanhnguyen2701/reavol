import { BlogDetailsResponse } from "@/type/blog";

// --- Action Types ---
export const FETCH_BLOG_DETAILS_REQUEST = "blogDetails/FETCH_BLOG_DETAILS_REQUEST";
export const FETCH_BLOG_DETAILS_SUCCESS = "blogDetails/FETCH_BLOG_DETAILS_SUCCESS";
export const FETCH_BLOG_DETAILS_FAILURE = "blogDetails/FETCH_BLOG_DETAILS_FAILURE";

export const CLEAR_BLOG_DETAILS = "blogDetails/CLEAR_BLOG_DETAILS";

// --- Action Creators ---
export const fetchBlogDetailsRequest = () => ({
  type: FETCH_BLOG_DETAILS_REQUEST,
});

export const fetchBlogDetailsSuccess = (data: BlogDetailsResponse) => ({
  type: FETCH_BLOG_DETAILS_SUCCESS,
  payload: data,
});

export const fetchBlogDetailsFailure = () => ({
  type: FETCH_BLOG_DETAILS_FAILURE,
});

export const clearBlogDetails = () => ({
  type: CLEAR_BLOG_DETAILS,
});

// --- Thunk ---
export const fetchBlogDetails = (slug: string) => async (dispatch: any) => {
  dispatch(fetchBlogDetailsRequest());

  try {
    const res = await fetch(
      `https://api.reavol.vn/api/v1/blog/detail/${slug}`,
      { cache: "no-store" }
    );

    const json = (await res.json()) as BlogDetailsResponse;

    dispatch(fetchBlogDetailsSuccess(json));
  } catch (error) {
    dispatch(fetchBlogDetailsFailure());
  }
};
