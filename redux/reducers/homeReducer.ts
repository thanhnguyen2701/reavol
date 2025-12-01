import { ApiResponse } from "@/type";
import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
} from "../actions/homeActions";

interface HomeState {
  data: ApiResponse | null;
  isLoading: boolean;
}

const initialState: HomeState = {
  data: null,
  isLoading: false,
};

export const homeReducer = (
  state = initialState,
  action: any,
): HomeState => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_HOME_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_HOME_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
