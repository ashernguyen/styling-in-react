import React from 'react';
import './styles.scss';
import Button from './Button';

const ButtonWithStylesheet = () => (
  <div className="container is-column">
    <h1>Button with stylesheet (scss)</h1>
    <div className="container">
      <Button>Default button</Button>
      <Button type="danger">Danger button</Button>
      <Button type="primary">Primary button</Button>
    </div>
  </div>
);

export default ButtonWithStylesheet;
