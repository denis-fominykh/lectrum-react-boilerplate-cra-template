import {
  STARSHIPS_FILL,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_START_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
} from 'bus/starships/actions/types';

import {
  Starships,
  ErrorHttpAction,
  StarshipsFillAction,
  StarshipsActionsTypes,
  StarshipsSetFetchingErrorAction,
} from 'bus/starships/types';

/** ============================================
 *  SYNC
 *  ============================================ */

export const startFetching = (): StarshipsActionsTypes => ({
  type: STARSHIPS_START_FETCHING,
});

export const stopFetching = (): StarshipsActionsTypes => ({
  type: STARSHIPS_STOP_FETCHING,
});

export const fill = (payload: Starships): StarshipsFillAction => ({
  type: STARSHIPS_FILL,
  payload,
});

export const setFetchingError = (
  payload: ErrorHttpAction,
): StarshipsSetFetchingErrorAction => ({
  type: STARSHIPS_SET_FETCHING_ERROR,
  error: true,
  payload,
});

/** ============================================
 *  ASYNC
 *  ============================================ */

export const fetchAsync = (): StarshipsActionsTypes => ({
  type: STARSHIPS_FETCH_ASYNC,
});
