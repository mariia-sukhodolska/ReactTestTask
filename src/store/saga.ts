import { all, put, takeLatest } from 'redux-saga/effects';

import { loadTVShowsSuccess, failureTVShows } from './tvShows/tvShows.actions';
import { actionTypes } from './tvShows/tvShow.types';

interface Path {
  type: string;
  value: string;
  queryString: string;
}

export function* loadTVShows({ value, queryString }: Path) {
  try {
    const res = yield fetch(
      `http://api.tvmaze.com/search/shows?${queryString}=${value}`
    );
    const data = yield res.json();
    yield put(loadTVShowsSuccess(data));
  } catch (err) {
    yield put(failureTVShows(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_TV_SHOWS, loadTVShows)]);
}

export default rootSaga;
