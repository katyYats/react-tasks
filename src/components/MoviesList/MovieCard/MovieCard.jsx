import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import closeBtn from '../../../assets/close.png';
import Modal from '../../Modals/Modal';
import MovieModal from '../../Modals/MovieModal';
import DeleteModal from '../../Modals/DeleteModal';
import { changeMovie, removeMovie } from '../../../actions/movieActions';

import './MovieCard.scss';

const mockedChangedMovie = (movie) => ({ ...movie, title: 'LALALA'});

const MovieCard = ({ movie, handleMovieDescription }) => {
  const dispatch = useDispatch();

  const { id, title, release_date, genres, poster_path } = movie;
  const [showMovieActions, setShowMovieActions] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const resetActiveModal = () => setActiveModal(null);

  const handleEditMovie = (movie) => {
    dispatch(changeMovie(movie));
    resetActiveModal();
  };

  const handleDeleteMovie = (id) => {
    dispatch(removeMovie(id));
    resetActiveModal();
  };

  return (
  <li
    className='movie-card'
    id={id}
    onClick={(e) => handleMovieDescription(e.currentTarget.id)}>
    <button
      className='movie-actions'
      onClick={() => setShowMovieActions(true)}>
        <img src='https://static.thenounproject.com/png/80671-200.png' />
    </button>
    { showMovieActions && 
      <div className='actions-container'>
        <button
          className='close-button'
          onClick={() => setShowMovieActions(false)}>
            <img src={closeBtn} />
        </button>
        <p
          className='action-item'
          onClick={() => setActiveModal('edit')}>
            Edit
        </p>
        <p
          className='action-item'
          onClick={() => setActiveModal('delete')}>Delete</p>
      </div>
    }
    <img className='movie-img' src={poster_path}></img>
    <p className='movie-info'>
      <span className='movie-name'>{title}</span>
      <span className='movie-year'>{release_date}</span>
    </p>
    <p className='movie-genre'>{genres.join(', ')}</p>
    {
      activeModal === 'edit' && 
      <Modal
        header='Edit movie'
        onClose={resetActiveModal}>
        <MovieModal {...movie} onSave={() => handleEditMovie(mockedChangedMovie(movie))}/>
      </Modal>
    }
    {
      activeModal === 'delete' && 
      <Modal
        header='Delete movie'
        onClose={resetActiveModal}>
        <DeleteModal onConfirm={() => handleDeleteMovie(id)} />
      </Modal>
    }
  </li>)};

export default MovieCard;
