import React from 'react';
import './index.css';
const Button = props => {
  return (
    <button onClick={props.close} className={'button'}>
      {props.children}
    </button>
  );
};

export default Button;
