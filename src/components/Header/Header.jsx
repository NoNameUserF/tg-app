import React from 'react';

import './index.css';

import Button from '../Button/Button';
const Header = () => {
  const tg = window.Telegram.WebApp;

  const close = () => {
    tg.close();
  };
  return (
    <header className='header'>
      <h1>Hello</h1>
      <span className='username'>{tg.initDataUnsafe?.user?.username}</span>
      <Button close={close}>Close</Button>
    </header>
  );
};

export default Header;
