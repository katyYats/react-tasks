import { fetchMovies, postMovie, editMovie, deleteMovie } from '../api/Api';
import {
	GET_MOVIES,
	GET_MOVIES_SUCCESS,
	ADD_MOVIE_SUCCESS,
	EDIT_MOVIE_SUCCESS,
	DELETE_MOVIE_SUCCESS
} from '../types/moviesTypes';

const getMoviesBegin = () => ({
	type: GET_MOVIES
});

const getMoviesSuccess = (movies) => ({
	type: GET_MOVIES_SUCCESS,
	payload: movies
});

export const getMovies = () => (dispatch) => {
	dispatch(getMoviesBegin());
	return fetchMovies().then(movies =>
		dispatch(getMoviesSuccess(movies)))
};

const addMovieSuccess = (movie) => ({
	type: ADD_MOVIE_SUCCESS,
	payload: movie
});

export const addMovie = (movie) => (dispatch) => {
	return postMovie(movie).then(movie =>
		dispatch(addMovieSuccess(movie)));
};

const removeMovieSuccess = (id) => ({
	type: DELETE_MOVIE_SUCCESS,
	payload: id
});

export const removeMovie = (id) => (dispatch) => {
	return deleteMovie(id).then(id =>
		dispatch(removeMovieSuccess(id)));
};

const changeMovieSuccess = (movie) => ({
	type: EDIT_MOVIE_SUCCESS,
	payload: movie
});

export const changeMovie = (movie) => (dispatch) => {
	return editMovie(movie).then(movie =>
		dispatch(changeMovieSuccess(movie)));
};
