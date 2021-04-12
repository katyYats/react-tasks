import React from 'react';

import './ResultsFilter.scss';

const ResultsFilter = ({ setFilter }) => (
  <div className='results-filter'>
    <button className='filter-item' onClick={() => setFilter('all')}>All</button>
    <button className='filter-item' onClick={() => setFilter('documentary')}>Documentary</button>
    <button className='filter-item' onClick={() => setFilter('comedy')}>Comedy</button>
    <button className='filter-item' onClick={() => setFilter('horror')}>Horror</button>
    <button className='filter-item' onClick={() => setFilter('crime')}>Crime</button>
  </div>
);

export default ResultsFilter;
