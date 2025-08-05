export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

export interface SelectedMovie {
  backdrop_path: string | null;
  title: string;
  overview: string;
  original_language: string;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
