import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modals/Modal';
import MovieModal from '../Modals/MovieModal';
import { initialMovieState } from '../../static/moviesData';
import { addMovie } from '../../actions/movieActions';

import './AddMovie.scss';

const mockMovie = {
  title: 'Bohemian rhapsody',
  release_date: '2017-04-21',
  poster_path: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/46/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg/211px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg',
  genres: ['drama'],
  overview: 'jkkj',
  runtime: 120
};

const AddMovie = () => {
  const dispatch = useDispatch();

  const [activeModal, setActiveModal] = useState(false);
  const [movieState, setMovieState] = useState(initialMovieState);

  const handleChangeMovieState = (e) => {
    const fieldName = e.currentTarget.id;

    setMovieState({
      ...movieState,
      [fieldName]: e.target.value
    })
  };

  const resetActiveModal = () => {
    setActiveModal(false);
    setMovieState(initialMovieState);
  };

  const onSubmit = (movie) => {
    dispatch(addMovie(movie));
    resetActiveModal();
  };

  return (
    <>
      <button
        className='add-button'
        onClick={() => setActiveModal(true)}>
        + Add Movie
      </button>
      {
        activeModal &&
        <Modal
          header='Add movie'
          onClose={resetActiveModal}>
          <MovieModal
            {...movieState}
            onChange={handleChangeMovieState}
            onReset={() => setMovieState(initialMovieState)}
            onSave={() => onSubmit(mockMovie)}/>
        </Modal>
      }
    </>
  );
};

export default AddMovie;
