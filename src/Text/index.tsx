import React, { forwardRef } from 'react';

import { ColorOptions } from '../theme';
import {
  Box,
  BoxProps,
  ResponsiveFont,
  ResponsiveFontSize,
  ResponsiveFontWeight,
  ResponsiveTextAlign,
} from '../Box';

export interface TextProps
  extends Pick<
    BoxProps,
    | 'as'
    | 'letterSpacing'
    | 'lineHeight'
    | 'truncate'
    | 'children'
    | 'textTransform'
  > {
  font?: ResponsiveFont;
  size?: ResponsiveFontSize;
  weight?: ResponsiveFontWeight;
  color?: ColorOptions;
  align?: ResponsiveTextAlign;
}

export const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const { font = 'body', size, weight, color, ...rest } = props;
  return (
    <Box
      ref={ref}
      as="span"
      fontFamily={font}
      fontSize={size}
      fontWeight={weight}
      color={color}
      {...rest}
    />
  );
});
