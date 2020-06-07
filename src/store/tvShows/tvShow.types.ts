export type TvShowState = {
  tvShowsList: {
    data: TV.TVShow[];
    isLoaded: boolean;
    error: any;
  };
};

export const actionTypes = {
  LOAD_TV_SHOWS: 'LOAD_TV_SHOWS',
  LOAD_TV_SHOWS_SUCCESS: 'LOAD_TV_SHOWS_SUCCESS',
  FAILURE_TV_SHOWS: 'FAILURE_TV_SHOWS'
};
