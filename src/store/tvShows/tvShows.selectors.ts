import { RootState } from '../configure-store';

export const selectTVShows = ({ tvShows }: RootState): TV.TVShow[] =>
  tvShows.tvShowsList.data;
export const selectIsTVShowsLoaded = ({ tvShows }: RootState): boolean =>
  tvShows.tvShowsList.isLoaded;
