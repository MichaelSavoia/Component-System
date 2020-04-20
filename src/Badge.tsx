import React, { ReactElement } from 'react';

import { Box, BoxSystemPropTypes } from './Box';
import { useBadgeStyles, BadgeVariantType } from './style-hooks/useBadgeStyles';
import { ColorOptionsType } from 'types';

interface BadgePropTypes extends BoxSystemPropTypes {
  color?: ColorOptionsType;
  variant?: BadgeVariantType;
}

export const Badge = ({
  color = 'gray',
  variant = 'outline',
  ...props
}: BadgePropTypes): ReactElement => {
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
