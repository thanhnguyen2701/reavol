// blogDetails/reducer.ts
import {
  FETCH_BLOG_DETAILS_REQUEST,
  FETCH_BLOG_DETAILS_SUCCESS,
  FETCH_BLOG_DETAILS_FAILURE,
  CLEAR_BLOG_DETAILS,
} from "./action";

import { BlogDetailsResponse } from "@/type/blog";

export interface BlogDetailsState {
  details: BlogDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BlogDetailsState = {
  details: null,
  isLoading: false,
};

export const blogDetailsReducer = (
  state = initialState,
  action: any
): BlogDetailsState => {
  switch (action.type) {
    case FETCH_BLOG_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_BLOG_DETAILS_SUCCESS:
      return { ...state, isLoading: false, details: action.payload };

    case FETCH_BLOG_DETAILS_FAILURE:
      return { ...state, isLoading: false };

    case CLEAR_BLOG_DETAILS:
      return { ...state, details: null };

    default:
      return state;
  }
};
