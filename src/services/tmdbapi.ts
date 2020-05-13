// @ts-ignore
import axios from 'axios';
import config from '../../environment';

const tmdbApi = axios.create({
  baseURL: config.TMDB_BASE_URL,
  headers: { Authorization: `Bearer ${config.TMDB_TOKEN}`}
});

export default tmdbApi;