import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  border,
  background,
  position
} from 'styled-system';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Sx, BoxProps, Variant } from './types';

const sx: Sx = props => css(props.sx)(props.theme);

const base: Sx = props => css(props.__css)(props.theme);

const variant: Variant = ({ theme = {}, variant = '', tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

const Box = styled<'div', BoxProps>('div', {
  shouldForwardProp
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  sx,
  base,
  variant,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
    border,
    background,
    position
  )
);

export default Box;
