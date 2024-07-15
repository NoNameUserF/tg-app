import React from 'react';

import './index.css';

import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
const Header = () => {
  const { close, user } = useTelegram();
  return (
    <header className='header'>
      <div className='wrapper'>
        <h1>Hello</h1>
        <span className='username'>{user}</span>
        <Button close={close}>Close</Button>
      </div>
    </header>
  );
};

export default Header;
