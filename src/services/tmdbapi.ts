import axios from 'axios';
import config from '../../environment';


const tmdbApi = axios.create({
  baseURL: config.TMDB_BASE_URL,
  headers: { Authorization: `Bearer ${config.TMDB_TOKEN}`}
});

// const myHeaders = new Headers()
// myHeaders.append('Authorization',  `Bearer ${process.env.TMDB_TOKEN}`);
// console.log(process.env.TMDB_BASE_URL)
// const tmdbApi = fetch(process.env.TMDB_BASE_URL + 'movies/popular', {method: 'GET', headers: myHeaders}).then(async function(response) {
//   return response;
// })


export default tmdbApi;