import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import tmdbApi from "../services/tmdbapi";
import MovieCard from "../components/MovieCard";
import { Movie } from "../interfaces/MovieInterface";

const ShowMovies: FunctionalComponent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const loadMovies = async (): Promise<void> => {
      const [popularRes, nowPlayingRes, genresRes] = await Promise.all([
        tmdbApi.get("/movie/popular"),
        tmdbApi.get("/movie/now_playing"),
        tmdbApi.get("/genre/movie/list"),
      ]);
      console.log(popularRes)
      setPopularMovies(popularRes.results);
      setNowPlayingMovies(nowPlayingRes.results);
      setGenres(genresRes.genres);
    };
    loadMovies();
  }, []);

  return (
      <div className="container mx-auto px-4 pt-16">
        <div className="popular-movies">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
            Popular Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {popularMovies.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>
        </div>

        <div className="now-playing-movies py-24">
          <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
            Now Playing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {nowPlayingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default ShowMovies;
