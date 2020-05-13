import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import tmdbApi from "../services/tmdbapi";
import MovieCard from "../components/MovieCard";
import config from "../../environment";

const ShowActors: FunctionalComponent = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const loadActors = async () => {
      const actorsRes = await tmdbApi.get("/person/popular");
      setActors(actorsRes.data.results);
    };
    loadActors();
  }, []);

  return (
    <div class="container mx-auto px-4 py-16">
      <div class="popular-actors">
        <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
          Popular Actors
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {actors.map((actor) => {
            return (
              <div class="actor mt-8">
                <a href={`/actor/${actor.id}`}>
                  <img
                    src={`${config.TMDB_IMAGE_URL}/w300${actor.profile_path}`}
                    alt="profile image"
                    class="hover:opacity-75 transition ease-in-out duration-150"
                  />
                </a>
                <div class="mt-2">
                  <a
                    href={`/actor/${actor.id}`}
                    class="text-lg hover:text-gray-300"
                  >
                    {actor.name}
                  </a>
                  <div class="text-sm truncate text-gray-400">
                    {actor.known_for}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowActors;
