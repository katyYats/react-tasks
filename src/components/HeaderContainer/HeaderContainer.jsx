import React from 'react';

import Logo from '../Logo';
import AddMovie from '../AddMovie';
import Search from '../Search';
import MovieDetails from '../MovieDetails/MovieDetails';

import './HeaderContainer.scss';

const HeaderContainer = ({
  movieDetails,
  setActiveModal,
  handleMovieDescription
}) => (
  <div className='header-container'>
    <div className='header'>
      <Logo />
      {
        !movieDetails
          ? <AddMovie setActiveModal={setActiveModal} />
          : <button
              className='search-button'
              onClick={() => handleMovieDescription(null)}>
              <img src='https://spng.pngfind.com/pngs/s/109-1092764_search-icon-icon-find-svg-hd-png-download.png' />
            </button>
      }
    </div>
    {
      movieDetails
        ? <MovieDetails {...movieDetails} />
        : <Search />
    }
  </div>);

export default HeaderContainer;
