import React from 'react';

import MovieCard from './MovieCard';

import './MoviesList.scss';

const MoviesList = ({ movies }) => {
  return (
    <ul className='movieList'>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default MoviesList;
