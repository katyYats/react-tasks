import axios from 'axios';

const moviesUrl = 'http://localhost:4000/movies';
const deleteMovieUrl = (moviesUrl, id) => `${moviesUrl}/${id}`;

export const fetchMovies = async () => {
  let response;

  try {
    response = await axios.get(moviesUrl);
  } catch (e) {
    console.log(e);
  }

  return response.data.data;
};

export const postMovie = async (movie) => {
  let response;

  try {
    response = await axios.post(moviesUrl, movie);
  } catch (e) {
    console.log(e);
  }

  return response.data;
};

export const editMovie = async (movie) => {
  let response;

  try {
    response = await axios.put(moviesUrl, movie);
  } catch (e) {
    console.log(e);
  }

  return response.data;
};

export const deleteMovie = async (id) => {
  const url = deleteMovieUrl(moviesUrl, id);
  let response;

  try {
    response = await axios.delete(url);
  } catch (e) {
    console.log(e);
  }

  return id;
};
