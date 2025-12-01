import { ApiResponse } from "@/type";

export const FETCH_HOME_REQUEST = "FETCH_HOME_REQUEST";
export const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS";
export const FETCH_HOME_FAILURE = "FETCH_HOME_FAILURE";

export const fetchHomeRequest = () => ({
  type: FETCH_HOME_REQUEST,
});

export const fetchHomeSuccess = (data: ApiResponse) => ({
  type: FETCH_HOME_SUCCESS,
  payload: data,
});

export const fetchHomeFailure = () => ({
  type: FETCH_HOME_FAILURE,
});

export const fetchHomeData = () => {
  return async (dispatch: any) => {
    dispatch(fetchHomeRequest());

    try {
      const res = await fetch(
        "https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false",
        { cache: "no-store" },
      );
      const json = await res.json();
      dispatch(fetchHomeSuccess(json as ApiResponse));
    } catch (error) {
      dispatch(fetchHomeFailure());
    }
  };
};
