import devConfig from "./environment_dev";

interface Config {
  TMDB_BASE_URL: string;
  TMDB_IMAGE_URL: string;
  TMDB_KEY: string;
  TMDB_TOKEN: string;
}


const key = devConfig.TMDB_KEY
const token = devConfig.TMDB_TOKEN

const config: Config = {
  TMDB_BASE_URL: "https://api.themoviedb.org/3/",
  TMDB_IMAGE_URL: "https://image.tmdb.org/t/p/",
  TMDB_KEY: key,
  TMDB_TOKEN: token,
};

export default config;
