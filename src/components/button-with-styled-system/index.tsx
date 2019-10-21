import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Flex from './core/Flex';
import Button from './Button';

export const sizes = [0, 4, 8, 12, 16, 20, 24, 28, 32, 64, 128, 256];

const theme = {
  breakpoints: ['48rem', '64rem', '76rem', '88rem'],
  colors: {
    white: '#fff',
    dark: '#333',
    gray: '#cfd3d6',
    primary: '#7eb6e2',
    danger: '#e7969b'
  },
  space: sizes,
  fontSizes: sizes,
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  buttons: {
    primary: {
      bg: 'primary',
      borderColor: 'primary',
      color: 'white'
    },
    danger: {
      bg: 'danger',
      borderColor: 'danger',
      color: 'white'
    }
  }
};

const ButtonWithStyledSystem = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" width={1} maxWidth="1400px" mx="auto" my={0}>
        <h1>Button with styled-system</h1>
        <Flex>
          <Button mr={4}>Default button</Button>
          <Button mr={4} variant="danger">
            Danger button
          </Button>
          <Button variant="primary">Primary button</Button>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};

export default ButtonWithStyledSystem;
