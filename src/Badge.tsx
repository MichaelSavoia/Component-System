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
  variant = 'subtle',
  ...props
}) => {
  return <Box {...useBadgeStyles({ color, variant })} {...props} />;
};
