import { API } from 'api/config';
import { Starships } from 'bus/starships/types';

export type FetchDataType<T> = () => Promise<T>;

type APIStarshipsDataType = {
  starships: {
    fetch: FetchDataType<Starships>;
  };
};

export const fetchStarshipsApi: APIStarshipsDataType = {
  starships: {
    fetch: (): Promise<Starships> =>
      fetch(API.STARSHIPS, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(({ results }) => ({ results })),
  },
};
