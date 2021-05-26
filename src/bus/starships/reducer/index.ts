import {
  STARSHIPS_FILL,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_START_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
} from 'bus/starships/actions/types';

import { StarshipsState, StarshipsActionsTypes } from 'bus/starships/types';

const initialState: StarshipsState = {
  data: {
    results: [],
  },
  isFetching: false,
  error: false,
};

export const starshipsReducer = (
  state = initialState,
  action: StarshipsActionsTypes,
): StarshipsState => {
  switch (action.type) {
    case STARSHIPS_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case STARSHIPS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case STARSHIPS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case STARSHIPS_FILL:
      return {
        ...state,
        data: {
          ...action.payload,
        },
        error: false,
      };
    case STARSHIPS_FETCH_ASYNC:
      return state;
    default:
      // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
