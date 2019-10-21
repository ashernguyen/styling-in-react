import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  onClick?: () => void;
  colorType?: 'danger' | 'primary';
}

interface ButtonProps {
  onClick?: () => void;
  type?: 'danger' | 'primary';
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  padding: 1rem 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    opacity: 0.75;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    font-size: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }

  ${({ colorType, theme }) =>
    colorType === 'primary' &&
    `
    background: ${theme.colors.blue};
    border-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  `}

  ${({ colorType, theme }) =>
    colorType === 'danger' &&
    `
    background: ${theme.colors.red};
    border-color: ${theme.colors.red};
    color: ${theme.colors.white};
  `}
`;

const Button: FunctionComponent<ButtonProps> = ({ onClick, children, type }) => (
  <StyledButton colorType={type} onClick={onClick}>
    <span>{children}</span>
  </StyledButton>
);

export default Button;
