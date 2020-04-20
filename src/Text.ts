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

export type TruncateProps = Partial<{ isTruncated?: boolean }>;

const truncate = (props: TruncateProps): {} | undefined => {
  if (props.isTruncated) {
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }

  return;
};

const systemProps = compose(color, display, space, typography);

export interface TextSystemPropTypes
  extends ColorProps,
    DisplayProps,
    SpaceProps,
    TypographyProps,
    AsType {
  color?: string;
  isTruncated?: boolean;
}

export const Text = styled.p<TextSystemPropTypes>`
  ${systemProps}
  ${truncate}
`;
