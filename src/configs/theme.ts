import { css } from '@emotion/core';
import { Colors } from './types';

export const normalize = css`
  /* stylelint-disable*/

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /* stylelint-enable */
`;

export const sizes = [0, 4, 8, 16, 20, 24, 28, 32, 64, 128, 256];

export const buildTheme = (colors: Colors): any => ({
  breakpoints: ['48rem', '64rem', '76rem', '88rem'],
  colors,
  space: sizes,
  fontSizes: sizes,
  fonts: {
    base: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
    monospace: `"Inconsolata", "Consolas", "Monaco", monospace`
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    small: 1,
    normal: 1.25,
    large: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    medium: '0.1rem',
    small: '-0.05rem',
    large: '0.25rem'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    medium: '0 0 10px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 6, 16, 9999, '100%'],
  inputs: {
    base: {
      border: '1px solid',
      background: colors.white,
      color: colors.gray[5],
      borderColor: colors.gray[5],
      '::placeholder': {
        color: colors.gray[5]
      },
      '&:hover, &:active': {
        opacity: 1,
        borderColor: colors.base
      }
    },
    primary: {
      border: '1px solid',
      background: colors.white,
      color: colors.base,
      borderColor: colors.base,
      '::placeholder': {
        color: colors.base
      },
      '&:hover, &:active': {
        opacity: 1,
        borderColor: colors.blue[3]
      }
    },
    warning: {
      border: '1px solid',
      background: colors.white,
      color: colors.yellow[4],
      borderColor: colors.yellow[4],
      '::placeholder': {
        color: colors.yellow[4]
      },
      '&:hover, &:active': {
        opacity: 1,
        borderColor: colors.yellow[3]
      }
    },
    danger: {
      border: '1px solid',
      background: colors.white,
      color: colors.red[4],
      borderColor: colors.red[4],
      '::placeholder': {
        color: colors.red[4]
      },
      '&:hover, &:active': {
        opacity: 1,
        borderColor: colors.red[3]
      }
    },
    success: {
      border: '1px solid',
      background: colors.white,
      color: colors.green[4],
      borderColor: colors.green[4],
      '::placeholder': {
        color: colors.green[4]
      },
      '&:hover, &:active': {
        opacity: 1,
        borderColor: colors.green[3]
      }
    }
  },
  buttons: {
    primary: {
      border: 'none',
      background: colors.base,
      color: colors.white,
      '&:hover, &:active': {
        opacity: 1,
        background: colors.blue[3]
      }
    },
    success: {
      border: 'none',
      background: colors.green[4],
      color: colors.white,
      '&:hover, &:active': {
        opacity: 1,
        background: colors.green[3]
      }
    },
    warning: {
      border: 'none',
      background: colors.yellow[4],
      color: colors.white,
      '&:hover, &:active': {
        opacity: 1,
        background: colors.yellow[3]
      }
    },
    danger: {
      border: 'none',
      background: colors.red[4],
      color: colors.white,
      '&:hover, &:active': {
        opacity: 1,
        background: colors.red[3]
      }
    },
    outlinedPrimary: {
      border: '1px solid',
      background: colors.white,
      color: colors.base,
      borderColor: colors.base,
      '&:hover, &:active': {
        opacity: 1,
        color: colors.blue[3],
        borderColor: colors.blue[3]
      }
    },
    outlinedSuccess: {
      border: '1px solid',
      background: colors.white,
      color: colors.green[4],
      borderColor: colors.green[4],
      '&:hover, &:active': {
        opacity: 1,
        color: colors.green[3],
        borderColor: colors.green[3]
      }
    },
    outlinedWarning: {
      border: '1px solid',
      background: colors.white,
      color: colors.yellow[4],
      borderColor: colors.yellow[4],
      '&:hover, &:active': {
        opacity: 1,
        color: colors.yellow[3],
        borderColor: colors.yellow[3]
      }
    },
    outlinedDanger: {
      border: '1px solid',
      background: colors.white,
      color: colors.red[4],
      borderColor: colors.red[4],
      '&:hover, &:active': {
        opacity: 1,
        color: colors.red[3],
        borderColor: colors.red[3]
      }
    }
  },
  Link: {
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  Input: {
    '&:disabled': {
      color: colors.gray[2],
      borderColor: colors.gray[2],
      '::placeholder': {
        color: colors.gray[2]
      },
      '&:hover': {
        '::placeholder': {
          color: colors.gray[2]
        }
      }
    }
  }
});

export const baseColors = {
  base: '#0070c6',
  black: '#374046',
  white: '#fff',
  gray: [
    '#f8f9f9',
    '#ecedee',
    '#dee1e2',
    '#cfd3d6',
    '#bfc4c8',
    '#adb3b8',
    '#98a0a7',
    '#7f8a92',
    '#606d77',
    '#374046'
  ],
  blue: [
    '#e4f0f9',
    '#c7dff2',
    '#a6cdeb',
    '#7eb6e2',
    '#4b9ad6',
    '#0070c6',
    '#0064b2',
    '#00589b',
    '#004880',
    '#00335a'
  ],
  indigo: [
    '#eaebfa',
    '#d2d5f5',
    '#b7bbef',
    '#969ce7',
    '#6a71dd',
    '#000dc6',
    '#000bb2',
    '#000a9b',
    '#000880',
    '#00055a'
  ],
  violet: [
    '#f0e9fa',
    '#e1d1f4',
    '#ceb6ee',
    '#b894e7',
    '#9a66dc',
    '#5600c6',
    '#4d00b2',
    '#43009c',
    '#370080',
    '#27005b'
  ],
  fuschia: [
    '#f9e9fa',
    '#f2d1f4',
    '#eab5ee',
    '#e193e7',
    '#d465dc',
    '#b900c6',
    '#a700b3',
    '#92009d',
    '#790082',
    '#57005e'
  ],
  pink: [
    '#fae9f3',
    '#f4d1e5',
    '#eeb5d6',
    '#e793c2',
    '#dc65a9',
    '#c60070',
    '#b30065',
    '#9d0058',
    '#820049',
    '#5d0035'
  ],
  red: [
    '#faeaeb',
    '#f5d2d4',
    '#efb7bb',
    '#e7969b',
    '#dd6870',
    '#c6000d',
    '#b3000b',
    '#9d000a',
    '#820008',
    '#5e0006'
  ],
  orange: [
    '#f9ede4',
    '#f2d9c6',
    '#eac2a4',
    '#e1a87c',
    '#d6874a',
    '#c65600',
    '#b24d00',
    '#9c4300',
    '#803700',
    '#5b2700'
  ],
  yellow: [
    '#f7f6de',
    '#efecba',
    '#e7e194',
    '#ddd568',
    '#d2c838',
    '#c6b900',
    '#b3a700',
    '#9d9200',
    '#827900',
    '#5e5700'
  ],
  lime: [
    '#edf8df',
    '#daf0bd',
    '#c5e898',
    '#adde6d',
    '#91d33b',
    '#70c600',
    '#65b300',
    '#589d00',
    '#498200',
    '#355d00'
  ],
  green: [
    '#e5f8e4',
    '#c8f2c6',
    '#a8eaa3',
    '#81e17b',
    '#51d648',
    '#0dc600',
    '#0bb300',
    '#0a9d00',
    '#088200',
    '#065e00'
  ],
  teal: [
    '#e3f8ec',
    '#c4f2d8',
    '#a2eac1',
    '#79e1a6',
    '#45d584',
    '#00c656',
    '#00b34d',
    '#009d44',
    '#008238',
    '#005e28'
  ],
  cyan: [
    '#e2f8f7',
    '#c3f1ee',
    '#a0e9e5',
    '#76e0d9',
    '#43d5cb',
    '#00c6b9',
    '#00b3a7',
    '#009d93',
    '#00827a',
    '#005e58'
  ]
};
