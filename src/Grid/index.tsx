import React from 'react';

import { Box, BoxProps } from '../Box';

interface GridProps extends Omit<BoxProps, 'display'> {}

export const Grid = (props: GridProps) => {
  return <Box {...props} display="grid" />;
};
