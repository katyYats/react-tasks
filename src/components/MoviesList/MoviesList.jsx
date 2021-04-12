import React from 'react';

import MovieCard from './MovieCard';

import './MoviesList.scss';

const MoviesList = ({ movies, handleMovieDescription }) => {
  return (
    <ul className='movieList'>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} handleMovieDescription={handleMovieDescription} />)}
    </ul>
  );
};

export default MoviesList;
