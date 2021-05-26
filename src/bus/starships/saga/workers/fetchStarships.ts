import {
  fill,
  stopFetching,
  startFetching,
  setFetchingError,
} from 'bus/starships/actions';

import { Starships } from 'bus/starships/types';

import { makeRequestWithSpinner } from 'workers';

import { fetchStarshipsApi } from 'api/fetchStarshipsApi';

export function* fetchStarships(): Generator {
  const options = {
    fetcher: fetchStarshipsApi.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setFetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}
