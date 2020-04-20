import css from '@styled-system/css';
import styled from '@emotion/styled';

import { Box, BoxSystemPropTypes } from './Box';
import { getSelectorCssObject, SelectorPropTypes } from './pseudoConstants';

export type PseudoBoxPropTypes = SelectorPropTypes & BoxSystemPropTypes;

export const PseudoBox = styled(Box)<PseudoBoxPropTypes>(props => {
  return css(getSelectorCssObject(props));
});
