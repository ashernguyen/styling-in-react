import React, { FunctionComponent } from 'react';
import CoreButton from './core/Button';
import { ButtonProps } from './core/types';

const Button: FunctionComponent<ButtonProps> = ({ onClick, children, variant, ...rest }) => (
  <CoreButton variant={variant} onClick={onClick} fontSize={[3, 4, 6]} {...rest}>
    <span>{children}</span>
  </CoreButton>
);

export default Button;
