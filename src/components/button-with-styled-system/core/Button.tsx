import React, { forwardRef } from 'react';
import Box from './Box';
import { ButtonProps } from './types';

const Button = forwardRef<ButtonProps, any>((props, ref) => (
  <Box
    ref={ref}
    as="button"
    tx="buttons"
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 1,
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 5,
      py: 4,
      color: 'dark',
      bg: 'white',
      border: 1,
      borderColor: 'gray',
      borderRadius: 3
    }}
  />
));

export default Button;
