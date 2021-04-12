import React from 'react';

import './Button.scss';

const Button = ({ className = '', text, onButtonClick }) => 
  <button
    className={`button ${className}`}
    onClick={onButtonClick}>
    {text}
  </button>;

export default Button;
