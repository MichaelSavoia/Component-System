import React from 'react';

import { Box, BoxPropTypes } from './Box';
import { useBadgeStyles, BadgeVariantType } from './style-hooks/useBadgeStyles';
import { ColorOptionsType } from 'types';

export interface BadgePropTypes extends BoxPropTypes {
  color?: ColorOptionsType;
  variant?: BadgeVariantType;
}

export const Badge: React.FC<BadgePropTypes> = ({
  color = 'gray',
  variant = 'outline',
  ...props
}) => {
  return (
    <Box
      display="inline-block"
      px={2}
      py={1}
      fontSize="xs"
      borderRadius="sm"
      whiteSpace="nowrap"
      verticalAlign="middle"
      {...useBadgeStyles({ color, variant })}
      {...props}
    />
  );
};
