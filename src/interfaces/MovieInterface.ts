interface Crew {
  name: string;
  job: string;
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Backdrop {
  file_path: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_data: string;
  credits: { crew: Array<Crew>; cast: Array<Cast> };
  genre_ids: Array<number>;
  genres: Array<string>;
  images: {backdrops: Array<Backdrop>};
  vote_average: string;
  release_date: string;
  poster_path: string;
  videos: { results: Array<{ id: string; key: string}> };
}
