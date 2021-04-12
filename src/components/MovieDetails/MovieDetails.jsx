import React from 'react';

import './MovieDetails.scss';

const MovieDetails = ({
  img,
  name,
  rating,
  genre,
  year,
  duration,
  description
}) => {
  return (
    <div className='movie-container'>
      <img className='movie-img' src={img} />
      <div className='movie-details'>
        <h2 className='movie-header'>{name}<span>{rating}</span></h2>
        <p>{genre}</p>
        <p><span>{year}</span><span>{duration}</span></p>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default MovieDetails;
