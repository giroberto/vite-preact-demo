import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import tmdbApi from "../services/tmdbapi";
import config from "../../environment";

const ShowActors: FunctionalComponent = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const loadActors = async (): Promise<void> => {
      const actorsRes = await tmdbApi.get("/person/popular");
      setActors(actorsRes.results);
    };
    loadActors();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="popular-actors">
        <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
          Popular Actors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {actors.map((actor) => {
            return (
              <div key={actor.id} className="actor mt-8">
                <a href={`/actor/${actor.id}`}>
                  <img
                    src={`${config.TMDB_IMAGE_URL}/w300${actor.profile_path}`}
                    alt="profile image"
                    className="hover:opacity-75 transition ease-in-out duration-150"
                  />
                </a>
                <div className="mt-2">
                  <a
                    href={`/actor/${actor.id}`}
                    className="text-lg hover:text-gray-300"
                  >
                    {actor.name}
                  </a>
                  <div className="text-sm truncate text-gray-400">
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
