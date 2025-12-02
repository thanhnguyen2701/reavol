import {
  FETCH_BOOK_DETAILS_REQUEST,
  FETCH_BOOK_DETAILS_SUCCESS,
  FETCH_BOOK_DETAILS_FAILURE,
  CLEAR_BOOK,
} from "./action";

import { BookDetailsResponse } from "@/type";

export interface BookDetailsState {
  details: BookDetailsResponse | null;
  isLoading: boolean;
}

const initialState: BookDetailsState = {
  details: null,
  isLoading: false,
};

export const bookDetailsReducer = (
  state = initialState,
  action: any
): BookDetailsState => {
  switch (action.type) {
    case FETCH_BOOK_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_BOOK_DETAILS_SUCCESS:
      return { ...state, isLoading: false, details: action.payload };

    case FETCH_BOOK_DETAILS_FAILURE:
      return { ...state, isLoading: false };

    case CLEAR_BOOK:
      return { ...state, details: null };

    default:
      return state;
  }
};
