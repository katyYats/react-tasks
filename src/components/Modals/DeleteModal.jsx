import React from 'react';
import Button from '../shared/Button';

import './MovieModal.scss';

const DeleteModal = ({ onConfirm }) => (
  <>
    <p className='movie-form'>Are you sure you whant to delete this movie?</p>
    <div className='modal-actions'>
      <Button className='save' text='confirm' onButtonClick={onConfirm} />
    </div>
  </>
);

export default DeleteModal;
