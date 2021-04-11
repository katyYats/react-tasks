import React from 'react';

import Logo from '../Logo';
import AddMovie from '../AddMovie';
import Search from '../Search';

import './HeaderContainer.scss';

const HeaderContainer = ({ setActiveModal }) => (
  <div className='header-container'>
    <div className='header'>
      <Logo />
      <AddMovie setActiveModal={setActiveModal}/>
    </div>
    <Search />
  </div>);

export default HeaderContainer;
