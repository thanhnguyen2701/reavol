import { RelatedBooksDataResponse } from "@/type";
import {
  FETCH_RELATED_REQUEST,
  FETCH_RELATED_SUCCESS,
  FETCH_RELATED_FAILURE,
  CLEAR_RELATED_BOOK,
} from "./action";

interface BookRelatedState {
  related: RelatedBooksDataResponse | null;
  isLoading: boolean;
}

const initialState: BookRelatedState = {
  related: null,
  isLoading: false,
};

export const bookRelatedReducer = (
  state = initialState,
  action: any
): BookRelatedState => {
  switch (action.type) {
    case FETCH_RELATED_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_RELATED_SUCCESS:
      return { ...state, isLoading: false, related: action.payload };

    case FETCH_RELATED_FAILURE:
      return { ...state, isLoading: false };

    case CLEAR_RELATED_BOOK:
      return { ...state, related: null };

    default:
      return state;
  }
};
