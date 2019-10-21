import React from 'react';
import Button from './Button';

const ButtonWithStylesheet = () => (
  <div
    style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}
  >
    <h1>Button with inline css - No way to make it responsive with media query</h1>
    <div
      style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }}
    >
      <Button>Default button</Button>
      <Button type="danger">Danger button</Button>
      <Button type="primary">Primary button</Button>
    </div>
  </div>
);

export default ButtonWithStylesheet;
