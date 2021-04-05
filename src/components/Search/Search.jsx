import React from 'react';

import './Search.scss';

const Search = () => {
  return (
    <div className='search-container'>
      <h1 className='search-title'>Find your movie</h1>
      <div className='search'>
        <input className='search-input' type='text' placeholder='What do you want to watch?'></input>
        <button className='search-button'>Search</button>
      </div>
    </div>
  );
};

export default Search;
