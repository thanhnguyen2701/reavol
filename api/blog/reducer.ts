import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE,
} from "./action";

import { BlogResponse } from "@/type/blog";

export interface BlogState {
  data: BlogResponse | null;
  isLoading: boolean;
}

const initialState: BlogState = {
  data: null,
  isLoading: false,
};

export const blogReducer = (
  state = initialState,
  action: any
): BlogState => {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_BLOG_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_BLOG_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
