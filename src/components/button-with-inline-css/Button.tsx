import React, { FunctionComponent } from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'danger' | 'primary';
}

const Button: FunctionComponent<ButtonProps> = ({ onClick, children, type }) => {
  const white = '#fff';
  const dark = '#333';
  const gray = '#cfd3d6';
  const blue = '#7eb6e2';
  const red = '#e7969b';

  const colorByType = {
    danger: red,
    primary: blue
  };

  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: type ? colorByType[type] : white,
    padding: '1rem 1.25rem',
    border: '1px solid',
    borderColor: type ? colorByType[type] : gray,
    borderRadius: '0.25rem',
    color: type ? white : dark,
    fontSize: '0.75rem',
    fontWeight: 200,
    cursor: 'pointer',
    marginRight: '1rem',
    '&:hover': {
      opacity: 0.75
    },
    '&.primary': {
      background: blue,
      borderColor: blue,
      color: white
    },
    '&.danger': {
      background: red,
      borderColor: red,
      color: white
    }
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
