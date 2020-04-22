import styled from '@emotion/styled';
import {
  color,
  compose,
  display,
  space,
  typography,
  ColorProps,
  DisplayProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { AsType } from './types';

const systemProps = compose(color, display, space, typography);

export interface StrongPropTypes
  extends ColorProps,
    DisplayProps,
    SpaceProps,
    TypographyProps,
    AsType {
  color?: string;
}

export const Strong = styled.span<StrongPropTypes>`
  ${systemProps}
`;

Strong.defaultProps = {
  fontWeight: 'bold',
};
