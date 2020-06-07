import { actionTypes, TvShowState } from './tvShow.types';
import { getTVShowsValues } from './tvShows.helpers';

export const initState: TvShowState = {
  tvShowsList: {
    data: [],
    isLoaded: false,
    error: null
  }
};

export const tvShowsReducer = (state = initState, action): any => {
  switch (action.type) {
    case actionTypes.LOAD_TV_SHOWS:
      return {
        ...state,
        tvShowsList: {
          data: [],
          isLoaded: false,
          error: null
        }
      };

    case actionTypes.LOAD_TV_SHOWS_SUCCESS:
      return {
        ...state,
        tvShowsList: {
          data: getTVShowsValues(action.data),
          isLoaded: true,
          error: null
        }
      };

    case actionTypes.FAILURE_TV_SHOWS:
      return {
        ...state,
        tvShowsList: {
          data: [],
          isLoaded: true,
          error: action.err
        }
      };

    default:
      return state;
  }
};
