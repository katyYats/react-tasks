import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = ({ name, year, genre, img }) => (
  <li className='movie-card'>
    <img className='movie-img' src={img}></img>
    <p className='movie-info'>
      <span className='movie-name'>{name}</span>
      <span className='movie-year'>{year}</span>
    </p>
    <p className='movie-genre'>{genre}</p>
  </li>);

MovieCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
  img: PropTypes.string,
};

export default MovieCard;
