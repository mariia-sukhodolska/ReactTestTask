import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTVShows,
  selectIsTVShowsLoaded
} from '../../store/tvShows/tvShows.selectors';

import { loadTVShows } from '../../store/tvShows/tvShows.actions';
import { Table } from '../../components/Table/Table';
import { sortArrByDirection } from '../../shared/utils/common.utils';
import styles from './TVShows.module.css';

export const TVShows: FC = () => {
  const dispatch = useDispatch();
  const fetchedShows = useSelector(selectTVShows);
  const isTVShowsLoaded = useSelector(selectIsTVShowsLoaded);
  const [shows, setShows] = useState<TV.TVShow[]>([]);
  const [activeSortLabel, setActiveSortLabel] = useState<TV.SortKey | null>(
    null
  );
  const initialNameValue = 'girls';
  const tableHeader: Record<string, any>[] = [
    {
      name: 'Show name',
      filter: {
        name: 'search',
        queryString: 'q'
      },
      sortKey: 'name'
    },
    {
      name: 'Language'
    },
    {
      name: 'Genres'
    },
    {
      name: 'Status'
    },
    {
      name: 'Rating',
      sortKey: 'rating'
    }
  ];

  useEffect(() => {
    dispatch(loadTVShows(initialNameValue, 'q'));
  }, [dispatch]);

  useEffect(() => {
    if (isTVShowsLoaded && fetchedShows) {
      setShows(fetchedShows);
      setActiveSortLabel(null);
    }
  }, [isTVShowsLoaded, fetchedShows]);

  const onSortCallback = useCallback(
    (value: TV.SortKey, sortDirection: TV.SortDirection) => {
      setActiveSortLabel(value);
      setShows(sortArrByDirection(shows, sortDirection, value));
    },
    [shows, setShows]
  );

  return (
    <div className={styles.container}>
      <h1>TV Shows</h1>
      <Table
        data={shows}
        isLoaded={isTVShowsLoaded}
        tableHeader={tableHeader}
        onSort={onSortCallback}
        activeSortLabel={activeSortLabel}
        initialNameValue={initialNameValue}
      />
    </div>
  );
};
