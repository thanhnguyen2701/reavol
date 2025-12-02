import { RelatedBooksDataResponse } from "@/type";
import { Dispatch } from "redux";

export const FETCH_RELATED_REQUEST = "book/FETCH_RELATED_REQUEST";
export const FETCH_RELATED_SUCCESS = "book/FETCH_RELATED_SUCCESS";
export const FETCH_RELATED_FAILURE = "book/FETCH_RELATED_FAILURE";

export const CLEAR_RELATED_BOOK = "book/CLEAR_RELATED_BOOK";

export const fetchRelatedRequest = () => ({
  type: FETCH_RELATED_REQUEST,
});

export const fetchRelatedSuccess = (data: RelatedBooksDataResponse) => ({
  type: FETCH_RELATED_SUCCESS,
  payload: data,
});

export const fetchRelatedFailure = () => ({
  type: FETCH_RELATED_FAILURE,
});

export const clearBook = () => ({
  type: CLEAR_RELATED_BOOK,
});

// --- Thunk ---
export const fetchRelatedBooks = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchRelatedRequest());

    try {
      const res = await fetch(
        `https://api.reavol.vn/api/v1/article/get-related-article?articleId=${id}`,
        { cache: "no-store" }
      );
      const data = (await res.json()) as RelatedBooksDataResponse;

      dispatch(fetchRelatedSuccess(data));
    } catch (err) {
      dispatch(fetchRelatedFailure());
    }
  };
};
