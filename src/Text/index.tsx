import React from 'react';

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

export const Text: React.FC<TextProps> = ({
  font = 'body',
  size,
  weight,
  color,
  ...rest
}: TextProps) => {
  return (
    <Box
      as="span"
      fontFamily={font}
      fontSize={size}
      fontWeight={weight}
      color={color}
      {...rest}
    />
  );
};

Text.displayName = 'Text';
