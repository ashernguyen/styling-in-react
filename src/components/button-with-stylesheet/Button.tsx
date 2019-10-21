import React, { FunctionComponent } from 'react';
import './button.scss';

interface ButtonProps {
  onClick?: () => void;
  type?: 'danger' | 'primary';
}

const Button: FunctionComponent<ButtonProps> = ({ onClick, children, type }) => (
  <button className={`button ${type}`} onClick={onClick}>
    <span>{children}</span>
  </button>
);

export default Button;
