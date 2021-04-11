import React from 'react';
import ReactDOM from 'react-dom';
import closeBtn from '../../assets/close.png';

import './MovieModal.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ header, onClose, children }) => (
	ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='madal-container'>
        <button
          className='button-close'
          onClick={onClose}>
            <img className='closeBtn' src={closeBtn} />
        </button>
        <h1 className='modal-header'>{header}</h1>
        {children}
      </div>
    </div>,
    modalRoot
  )
)

export default Modal;
