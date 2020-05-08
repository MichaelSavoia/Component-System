import React from 'react';

import { Box, BoxProps } from '../Box';

interface FlexProps extends Omit<BoxProps, 'display'> {}

export const Flex = (props: FlexProps) => {
  return <Box {...props} display="flex" />;
};
