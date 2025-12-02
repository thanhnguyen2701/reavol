import { BookDetailsResponse } from "@/type";

export const FETCH_BOOK_DETAILS_REQUEST = "book/FETCH_BOOK_DETAILS_REQUEST";
export const FETCH_BOOK_DETAILS_SUCCESS = "book/FETCH_BOOK_DETAILS_SUCCESS";
export const FETCH_BOOK_DETAILS_FAILURE = "book/FETCH_BOOK_DETAILS_FAILURE";
export const CLEAR_BOOK = "book/CLEAR_BOOK";

export const fetchBookDetailsRequest = () => ({
  type: FETCH_BOOK_DETAILS_REQUEST as typeof FETCH_BOOK_DETAILS_REQUEST,
});

export const fetchBookDetailsSuccess = (data: BookDetailsResponse) => ({
  type: FETCH_BOOK_DETAILS_SUCCESS as typeof FETCH_BOOK_DETAILS_SUCCESS,
  payload: data,
});

export const fetchBookDetailsFailure = () => ({
  type: FETCH_BOOK_DETAILS_FAILURE as typeof FETCH_BOOK_DETAILS_FAILURE,
});

export const clearBook = () => ({
  type: CLEAR_BOOK as typeof CLEAR_BOOK,
});

// --- Thunk (fetch API kiểu cũ) ---
export const fetchBookDetails = (id: number) => async (dispatch: any) => {
  dispatch(fetchBookDetailsRequest());

  try {
    const res = await fetch(
      `https://api.reavol.vn/api/v1/article/get-detail-article?articleId=${id}`,
      { cache: "no-store" }
    );

    const json = (await res.json()) as BookDetailsResponse;
    dispatch(fetchBookDetailsSuccess(json));
  } catch (error) {
    dispatch(fetchBookDetailsFailure());
  }
};
