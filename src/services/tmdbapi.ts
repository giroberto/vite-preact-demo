// import axios from 'axios';
import config from '../../environment';
import fetchWrapper from './fetchWrapper';

const fetchGet = (url: string): Promise<any> => {
  return fetchWrapper(config.TMDB_BASE_URL+ url, {token: config.TMDB_TOKEN});
}
const tmdbApi = {
  get: fetchGet
}

export default tmdbApi;