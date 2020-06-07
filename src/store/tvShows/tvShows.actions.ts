import { actionTypes } from './tvShow.types';

export const loadTVShows = (value: string, queryString: string): any => {
  return {
    type: actionTypes.LOAD_TV_SHOWS,
    value,
    queryString
  };
};

export const loadTVShowsSuccess = (data: any): any => {
  return {
    type: actionTypes.LOAD_TV_SHOWS_SUCCESS,
    data
  };
};

export const failureTVShows = (error: any): any => {
  return {
    type: actionTypes.FAILURE_TV_SHOWS,
    error
  };
};
