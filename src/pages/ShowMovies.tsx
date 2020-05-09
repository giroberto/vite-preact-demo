import { h, FunctionalComponent } from 'preact';
import { useState, useEffect } from "preact/hooks";
import tmdbApi from '../services/tmdbapi';
import { Movie } from '../interfaces/MovieInterface';

const ShowMovies: FunctionalComponent = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const apiResult = await tmdbApi.get('/movie/popular')
      setMovies(apiResult.data.results)
    }
    loadMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie: Movie) => <li key={movie.id}>{movie.original_title}</li>)}
    </ul>
  )
}


export default ShowMovies;