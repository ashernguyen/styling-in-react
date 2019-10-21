import styled from '@emotion/styled';
import { flexbox } from 'styled-system';
import { FlexProps } from './types';
import Box from './Box';

const Flex = styled<typeof Box, FlexProps>(Box)(
  {
    display: 'flex'
  },
  flexbox
);

export default Flex;
