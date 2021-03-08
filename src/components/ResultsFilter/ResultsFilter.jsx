import React from 'react';

import './ResultsFilter.scss';

const ResultsFilter = () => (
  <div className='results-filter'>
    <button className='filter-item'>All</button>
    <button className='filter-item'>Documentary</button>
    <button className='filter-item'>Comedy</button>
    <button className='filter-item'>Horror</button>
    <button className='filter-item'>Crime</button>
  </div>
);

export default ResultsFilter;
