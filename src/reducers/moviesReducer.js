import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  ADD_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS
} from '../types/moviesTypes';

const initialState = {
  movies: [],
  loading: false
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: [
          ...state.movies,
          ...action.payload
        ],
        loading: false
      }
    }
    case ADD_MOVIE_SUCCESS: {
      return {
        ...state,
        movies: [
          ...state.movies,
          action.payload
        ],
        loading: false
      }
    }
    case EDIT_MOVIE_SUCCESS: {
      const newData = state.movies.map((movie) =>
        (movie.id !== action.payload.id)
          ? movie
          : action.payload);

      return {
        ...state,
        movies: [
          ...newData
        ],
        loading: false
      }
    }
    case DELETE_MOVIE_SUCCESS: {
      return {
        ...state,
        movies: [
          ...state.movies.filter(({ id }) => id !== action.payload)
        ],
        loading: false
      }
    }
    default:
      return state
  }
}
