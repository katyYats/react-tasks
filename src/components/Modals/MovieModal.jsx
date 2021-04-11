import React from 'react';
import Button from '../shared/Button';

import './MovieModal.scss';

const GenreSelect = () => {
  const options = [
    {
      value: 'Select genre',
    },
    {
      value: 'comedy',
      selected: false,
    },
    {
      value: 'drama',
      selected: false,
    },
    {
      value: 'fantasy',
      selected: false,
    },
  ];

  return (
    <select id='genres'>
      {
        options.map((option, ind) =>
          <option key={ind} {...option}>
            {option.value}
          </option>
        )
      }
    </select>
)};

const MovieModal = ({ movieId, title, date, movieUrl, overview, runtime }) => (
  <>
    <form className='movie-form'>
      {
        movieId &&
        <label htmlFor='movieId'>
          Movie Id
          <input
            id='movieId'
            type='text'
            name='movieId'
            value={movieId}
            disabled />
        </label>
      }
      <label htmlFor='title'>
        Title</label>
        <input
          id='title'
          type='text'
          name='title'
          placeholder='Moana'
          value={title} />
      
      <label htmlFor='date'>
        Realese Date
        <input
          id='date'
          name='date'
          type='date'
          placeholder='Select Date'
          value={date} />
      </label>
      <label htmlFor='movieUrl'>
        MovieUrl
        <input
          id='movieUrl'
          name='movieUrl'
          type='text'
          placeholder='Movie URL here'
          value={movieUrl} />
      </label>
      <label htmlFor='genres'>
        Genre
        <GenreSelect />
      </label>
      <label htmlFor='overview'>
        Overview
        <input
          id='overview'
          name='overview'
          type='text'
          placeholder='Overview here'
          value={overview} />
      </label>
      <label htmlFor='runtime'>
        Runtime
        <input
          id='runtime'
          name='runtime'
          type='text'
          placeholder='Runtime here'
          value={runtime} />
      </label>
    </form>
    <div className='modal-actions'>
      <Button className='reset' text='reset' onButtonClick={() => {}} />
      <Button className='save' text='save' onButtonClick={() => {}} />
    </div>
  </>);

export default MovieModal;
