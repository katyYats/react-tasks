import React, { useState } from 'react';
import PropTypes from 'prop-types';

import closeBtn from '../../../assets/close.png';
import Modal from '../../Modals/Modal';
import MovieModal from '../../Modals/MovieModal';
import DeleteModal from '../../Modals/DeleteModal';


import './MovieCard.scss';

const MovieCard = ({ movie, handleMovieDescription }) => {
  const { id, name, year, genre, img } = movie;
  const [showMovieActions, setShowMovieActions] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const resetActiveModal = () => setActiveModal(null);

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
    <img className='movie-img' src={img}></img>
    <p className='movie-info'>
      <span className='movie-name'>{name}</span>
      <span className='movie-year'>{year}</span>
    </p>
    <p className='movie-genre'>{genre}</p>
    {
      activeModal === 'edit' && 
      <Modal
        header='Edit movie'
        onClose={resetActiveModal}>
        <MovieModal {...movie} onSave={(id) => handleDeleteMovie(id)}/>
      </Modal>
    }
    {
      activeModal === 'delete' && 
      <Modal
        header='Delete movie'
        onClose={resetActiveModal}>
        <DeleteModal />
      </Modal>
    }
  </li>)};

MovieCard.propTypes = {
  movie: {
    name: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    img: PropTypes.string,
  }
};

export default MovieCard;
