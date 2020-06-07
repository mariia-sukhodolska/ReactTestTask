declare namespace TV {
  interface TVShow {
    name: string;
    language: string;
    genres: string;
    status: string;
    rating: number | null;
  }

  type SortKey = keyof TVShow;

  type SortDirection = 'desc' | 'asc';
}
