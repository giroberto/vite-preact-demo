import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import tmdbApi from "../services/tmdbapi";
import { Movie } from "../interfaces/MovieInterface";
import config from "../../environment";
import TrailerModal from "../components/TrailerModal";

const ShowMovie: FunctionalComponent<{ id: number }> = ({ id }: { id: number}) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedBackrop, setSelectedBackrop] = useState<string>("");
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  const handlePlayTrailer = (): void => {
    setIsOpen(true);
  };

  const handleShowBackdrop = (e): void => {
    if (e.target.src) {
      setSelectedBackrop(e.target.src.replace("/w500", "/original"));
    }
    setShowBackdrop(showBackdrop ? false : true);
  };

  useEffect(() => {
    const loadMovie = async (): Promise<void> => {
      const movieRes = await tmdbApi.get(
        `/movie/${id}?append_to_response=credits,videos,images`
      );
      setMovie(movieRes);
    };
    loadMovie();
  }, []);

  if (movie === null) {
    return <div>No movie Found</div>;
  }

  return (
    <>
      <div className="movie-info border-b border-gray-800">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          <div className="flex-none">
            <img
              src={`${config.TMDB_IMAGE_URL}/w500/${movie.poster_path}`}
              alt="poster"
              className="w-64 lg:w-96"
              style="width: 24rem;"
            />
          </div>
          <div className="md:ml-24">
            <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{movie.title}</h2>
            <div className="flex flex-wrap items-center text-gray-400 text-sm">
              <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <path
                    d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                    data-name="star"
                  />
                </g>
              </svg>
              <span className="ml-1">{movie.vote_average}</span>
              <span className="mx-2">|</span>
              <span>{movie.release_date}</span>
              <span className="mx-2">|</span>
              <span>{movie.genres}</span>
            </div>

            <p className="text-gray-300 mt-8">{movie.overview}</p>

            <div className="mt-12">
              <h4 className="text-white font-semibold">Featured Crew</h4>
              <div className="flex mt-4">
                {movie.credits.crew.slice(0, 2).map((crew) => {
                  return (
                    <div key={crew.name} className="mr-8">
                      <div>{crew.name}</div>
                      <div className="text-sm text-gray-400">{crew.job}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {movie.videos.results && (
              <div>
                <div className="mt-12">
                  <button
                    onClick={handlePlayTrailer}
                    className="flex inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150"
                  >
                    <svg className="w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    <span className="ml-2">Play Trailer</span>
                  </button>
                </div>
                {isOpen && <TrailerModal movie={movie} setIsOpen={setIsOpen} />}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="movie-cast border-b border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-semibold">Cast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {movie.credits.cast.slice(0, 5).map((cast) => {
              return (
                <div key={cast.id} className="mt-8">
                  <a href={`/actor/${cast.id}`}>
                    <img
                      src={`${config.TMDB_IMAGE_URL}/w300/${cast.profile_path}`}
                      alt="actor"
                      className="hover:opacity-75 transition ease-in-out duration-150"
                    />
                  </a>
                  <div className="mt-2">
                    <a
                      href="{ route('actors.show', $cast.id) }"
                      className="text-lg mt-2 hover:text-gray:300"
                    >
                      {cast.name}
                    </a>
                    <div className="text-sm text-gray-400">{cast.character}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="movie-images" x-data="{ isOpen: false, image: ''}">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-semibold">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {movie.images.backdrops.slice(0, 9).map((image) => (
              <div key={image.file_path} className="mt-8">
                <div onClick={handleShowBackdrop}>
                  <img
                    src={`${config.TMDB_IMAGE_URL}/w500/${image.file_path}`}
                    alt="image1"
                    className="hover:opacity-75 transition ease-in-out duration-150"
                  />
                </div>
              </div>
            ))}
          </div>

          {showBackdrop && (
            <div
              style="background-color: rgba(0, 0, 0, .5);"
              className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
              x-show="isOpen"
            >
              <div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
                <div className="bg-gray-900 rounded">
                  <div className="flex justify-end pr-4 pt-2">
                    <button
                      onClick={handleShowBackdrop}
                      className="text-3xl leading-none hover:text-gray-300"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body px-8 py-8">
                    <img src={selectedBackrop} alt="poster" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowMovie;
