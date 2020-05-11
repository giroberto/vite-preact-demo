import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import tmdbApi from "../services/tmdbapi";
import MovieCard from "../components/MovieCard";

const ShowMovies: FunctionalComponent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const [popularRes, nowPlayingRes, genresRes] = await Promise.all([
        tmdbApi.get("/movie/popular"),
        tmdbApi.get("/movie/now_playing"),
        tmdbApi.get("/genre/movie/list"),
      ]);
      setPopularMovies(popularRes.data.results);
      setNowPlayingMovies(nowPlayingRes.data.results);
      setGenres(genresRes.data.genres);
    };
    loadMovies();
  }, []);

  return (
      <div class="container mx-auto px-4 pt-16">
        <div class="popular-movies">
          <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
            Popular Movies
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {popularMovies.map((movie) => (
              <MovieCard movie={movie} genres={genres} />
            ))}
          </div>
        </div>

        <div class="now-playing-movies py-24">
          <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
            Now Playing
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {nowPlayingMovies.map((movie) => (
              <MovieCard movie={movie} genres={genres} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default ShowMovies;
