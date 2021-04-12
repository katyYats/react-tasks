import React, { useCallback, useState } from 'react';

import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';
import { useFilter } from '../shared/hooks/useFilter';

import './ResultsContainer.scss';

const ResultsContainer = ({ movies, handleMovieDescription }) => {
  const [filteredMovies, setFilter] = useFilter('all', movies);

  return (
    <div className='results-container'>
      <div className='results-actions'>
        <ResultsFilter setFilter={setFilter}/>
        <ResultsSort />
      </div>
      <ResultsCount count={filteredMovies.length} />
      <MoviesList movies={filteredMovies} handleMovieDescription={handleMovieDescription}/>
    </div>
)};

export default ResultsContainer;
