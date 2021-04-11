import React from 'react';

import './AddMovie.scss';

const AddMovie = ({ setActiveModal }) => 
  <button
    className='add-button'
    onClick={() => setActiveModal('add')}>
    + Add Movie
  </button>;

export default AddMovie;
