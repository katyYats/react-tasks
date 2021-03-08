import React from 'react';

import './ResultsSort.scss';

const ResultsSort = () => (
  <div className='results-sort'>
    <p className='results-sort-title'>Sort By</p>
    <select className='results-sort-select'>
      <option value='Release Date' defaultValue>Release Date</option>
      <option value='Movie Name'>Movie Name</option>
      <option value='Movie Genre'>Movie Genre</option>
    </select>
  </div>
);

export default ResultsSort;
