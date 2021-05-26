import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootStateType } from 'types';
import { fetchAsync } from 'bus/starships/actions';
import { StarshipsState } from 'bus/starships/types';

export const useStarshipsFetch = (): StarshipsState => {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useSelector<
    RootStateType,
    StarshipsState
  >(state => state.starships);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return {
    data,
    isFetching,
    error,
  };
};
