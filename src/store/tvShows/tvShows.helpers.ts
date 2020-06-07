import {
  setNumberValue,
  setStringValue,
  setArrValue
} from '../../shared/utils/common.utils';

export const getTVShowsValues = (arr: any[]): TV.TVShow[] => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map(({ show: { name, language, genres, status, rating } }) => {
    return {
      name: setStringValue(name),
      language: setStringValue(language),
      genres: setArrValue(genres).join(', '),
      status: setStringValue(status),
      rating: setNumberValue(rating.average)
    };
  });
};
