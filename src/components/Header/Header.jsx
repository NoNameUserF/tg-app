import React from 'react';

import './index.css';

import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <header className='header'>
      <div className='wrapper'>
        <h1>Hello</h1>
        <span className='username'>{user}</span>
        <Button close={onClose}>Close</Button>
      </div>
    </header>
  );
};

export default Header;
