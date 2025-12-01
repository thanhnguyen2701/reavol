import { ApiResponse } from "@/type";
import { Dispatch } from "redux";

export const FETCH_HOME_REQUEST = "home/FETCH_HOME_REQUEST";
export const FETCH_HOME_SUCCESS = "home/FETCH_HOME_SUCCESS";
export const FETCH_HOME_FAILURE = "home/FETCH_HOME_FAILURE";

export const fetchHomeRequest = () => ({ type: FETCH_HOME_REQUEST });
export const fetchHomeSuccess = (data: ApiResponse) => ({
  type: FETCH_HOME_SUCCESS,
  payload: data,
});
export const fetchHomeFailure = () => ({ type: FETCH_HOME_FAILURE });

export const fetchHomeData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchHomeRequest());
    try {
      const res = await fetch(
        "https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false",
        { cache: "no-store" }
      );
      const data = (await res.json()) as ApiResponse;
      dispatch(fetchHomeSuccess(data));
    } catch (error) {
      dispatch(fetchHomeFailure());
    }
  };
};
