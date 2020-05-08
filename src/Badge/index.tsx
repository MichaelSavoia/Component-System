import React from 'react';

import { Box, BoxProps } from '../Box';
import { ColorOptions } from '../utils';
import { useBadgeStyles, BadgeVariants } from './styles';

export interface BadgeProps extends BoxProps {
  color?: ColorOptions;
  variant?: BadgeVariants;
}

export const Badge = ({
  color = 'gray',
  variant = 'subtle',
  ...props
}: BadgeProps) => {
  return <Box as="span" {...useBadgeStyles({ color, variant })} {...props} />;
};
