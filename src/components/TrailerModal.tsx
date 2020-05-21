import { FunctionalComponent } from "preact";
import { Movie } from "../interfaces/MovieInterface";

const TrailerModal: FunctionalComponent<{
  movie: Movie;
  setIsOpen: (arg0: boolean) => void;
}> = ({ movie, setIsOpen }: {movie: Movie; setIsOpen(arg0: boolean): void}) => (
  <div>
    <div
      style="background-color: rgba(0, 0, 0, .5);"
      className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
    >
      <div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div className="bg-gray-900 rounded">
          <div className="flex justify-end pr-4 pt-2">
            <button
              onClick={(): void => setIsOpen(false)}
              className="text-3xl leading-none hover:text-gray-300"
            >
              &times;
            </button>
          </div>
          <div className="modal-body px-8 py-8">
            <div
              className="responsive-container overflow-hidden relative"
              style="padding-top: 56.25%"
            >
              <iframe
                className="responsive-iframe absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${movie.videos.results[0]["key"]}`}
                style="border:0;"
                // allow="autoplay; encrypted-media"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TrailerModal;
