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

const MovieModal =
({
  id,
  title,
  release_date,
  genres,
  poster_path,
  overview,
  runtime,
  onChange,
  onSave,
  onReset
}) => {
  debugger;
  return (
    <>
      <form className='movie-form'>
        {
          id &&
          <label htmlFor='movieId'>
            Movie Id
            <input
              id='id'
              type='text'
              name='movieId'
              value={id}
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
            onChange={onChange}
            value={title} />
        
        <label htmlFor='release_date'>
          Realese Date
          <input
            id='release_date'
            name='release_date'
            type='date'
            placeholder='Select Date'
            onChange={onChange}
            value={release_date} />
        </label>
        <label htmlFor='movieUrl'>
          MovieUrl
          <input
            id='poster_path'
            name='poster_path'
            type='text'
            placeholder='Movie URL here'
            onChange={onChange}
            value={poster_path} />
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
            onChange={onChange}
            value={overview} />
        </label>
        <label htmlFor='runtime'>
          Runtime
          <input
            id='runtime'
            name='runtime'
            type='text'
            placeholder='Runtime here'
            onChange={onChange}
            value={runtime} />
        </label>
      </form>
      <div className='modal-actions'>
        <Button className='reset' text='reset' onButtonClick={onReset} />
        <Button className='save' text='save' onButtonClick={onSave} />
      </div>
    </>)};

export default MovieModal;
