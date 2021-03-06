import React from 'react';

import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';

import './ResultsContainer.scss';

const ResultsContainer = () => (
  <div className='results-container'>
    <div className='results-actions'>
      <ResultsFilter />
      <ResultsSort />
    </div>
    <ResultsCount />
    <MoviesList />
  </div>
);

export default ResultsContainer;
