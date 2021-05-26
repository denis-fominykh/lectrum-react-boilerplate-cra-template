import {
  STARSHIPS_FILL,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_START_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
} from 'bus/starships/actions/types';

export type Starship = {
  name: string;
};

export type Starships = {
  results: Starship[];
};

export type ErrorHttpAction = string;

export type StarshipsStartFetchingAction = {
  type: typeof STARSHIPS_START_FETCHING;
};

export type StarshipsStopFetchingAction = {
  type: typeof STARSHIPS_STOP_FETCHING;
};

export type StarshipsSetFetchingErrorAction = {
  error: true;
  payload: ErrorHttpAction;
  type: typeof STARSHIPS_SET_FETCHING_ERROR;
};

export type StarshipsFetchAsyncAction = {
  type: typeof STARSHIPS_FETCH_ASYNC;
};

export type StarshipsFillAction = {
  payload: Starships;
  type: typeof STARSHIPS_FILL;
};

export type StarshipsActionsTypes =
  | StarshipsFillAction
  | StarshipsFetchAsyncAction
  | StarshipsStopFetchingAction
  | StarshipsStartFetchingAction
  | StarshipsSetFetchingErrorAction;

export type StarshipsState = {
  data: Starships;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};
