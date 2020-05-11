import { h, FunctionalComponent } from "preact";
import { Movie } from "../interfaces/MovieInterface";

const TrailerModal: FunctionalComponent<{
  movie: Movie;
  setIsOpen: (arg0: boolean) => void;
}> = ({ movie, setIsOpen }) => (
  <div>
    <div
      style="background-color: rgba(0, 0, 0, .5);"
      class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
    >
      <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div class="bg-gray-900 rounded">
          <div class="flex justify-end pr-4 pt-2">
            <button
              onClick={() => setIsOpen(false)}
              class="text-3xl leading-none hover:text-gray-300"
            >
              &times;
            </button>
          </div>
          <div class="modal-body px-8 py-8">
            <div
              class="responsive-container overflow-hidden relative"
              style="padding-top: 56.25%"
            >
              <iframe
                class="responsive-iframe absolute top-0 left-0 w-full h-full"
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
