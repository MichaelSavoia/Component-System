import css from '@styled-system/css';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';
import { getSelectorCssObject, SelectorProps } from './constants';
import { AllHTMLAttributes } from 'react';

export type PseudoBoxProps = SelectorProps &
  BoxProps &
  AllHTMLAttributes<HTMLDivElement>;

export const PseudoBox = styled(Box)<PseudoBoxProps>(props => {
  return css(getSelectorCssObject(props));
});
