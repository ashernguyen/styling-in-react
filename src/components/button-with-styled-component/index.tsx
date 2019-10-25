import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

const theme = {
  colors: {
    white: '#fff',
    dark: '#333',
    gray: '#cfd3d6',
    blue: '#7eb6e2',
    red: '#e7969b'
  },
  breakpoints: {
    table: '679px',
    desktop: '1025px'
  }
};

interface ContainerProps {
  isColumn?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${({ isColumn }) =>
    isColumn &&
    `
    flex-direction: column;

  `}

  & > button {
    margin-right: 1rem;
  }
`;

const ButtonWithStyledComponents = () => (
  <ThemeProvider theme={theme}>
    <Container isColumn>
      <h1>Style button by Styled-components (CSS in JS)</h1>
      <Container>
        <Button>Default button</Button>
        <Button type="danger">Danger button</Button>
        <Button type="primary">Primary button</Button>
      </Container>
    </Container>
  </ThemeProvider>
);

export default ButtonWithStyledComponents;
